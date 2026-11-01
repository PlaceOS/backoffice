import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { describeError } from '../common/errors';
import { escapeHtml } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { waitForEvent } from '../common/signals';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import {
    GroupBulkAddItem,
    GroupBulkAddModalComponent,
    GroupBulkAddModalData,
    GroupBulkAddResult,
} from './group-bulk-add-modal.component';
import { GroupPermissionsModalComponent } from './group-permissions-modal.component';

/** Settings for one kind of group membership, e.g. the users of a group */
export interface GroupMembershipOptions<Row, Item extends GroupBulkAddItem> {
    /** Locale key prefix for one member, e.g. `GROUPS.USER` */
    one: string;
    /** Locale key prefix for many members, e.g. `GROUPS.USERS` */
    many: string;
    /** Locale key for the search placeholder */
    search: string;
    /** Locale key for the member column name */
    column: string;
    /** Field of a row that holds the member item, e.g. `user`. Sorts the column. */
    member_key: string;
    /** Route of the member items, e.g. `users` */
    route: string;
    /** Locale key to show when a row has no permissions */
    no_permissions: string;
    /** Show and edit the deny flag of each row */
    show_deny?: boolean;
    /** Current membership rows */
    rows: () => Row[];
    /** Domain that members must belong to */
    authority_id: () => string | undefined;
    /** Find items that can become members */
    query: (q: string, authority_id: string | undefined) => Promise<Item[]>;
    /** ID of the member item of a row */
    member_id: (row: Row) => string;
    /** Display name of the member item of a row */
    member_name: (row: Row) => string;
    /** Second line of text for the member item of a row */
    member_detail: (row: Row) => string;
    /** Domain of a search result. Results from another domain are excluded. */
    item_authority: (item: Item) => string | undefined;
    /** Start value for bulk add permissions. Shows the permissions field. */
    bulk_permissions?: () => number;
    add: (id: string, permissions?: number) => Promise<unknown>;
    remove: (row: Row) => Promise<unknown>;
    update: (
        row: Row,
        changes: { permissions: number; deny: boolean },
    ) => Promise<unknown>;
    /** Reload the membership rows */
    changed: () => void;
}

export type GroupMembership<
    Row extends { permissions?: number; deny?: boolean } = {
        permissions?: number;
        deny?: boolean;
    },
    Item extends GroupBulkAddItem = GroupBulkAddItem,
> = ReturnType<typeof groupMembership<Row, Item>>;

/**
 * Add, bulk add, remove and edit actions for one kind of group membership.
 * State services create one for each membership list they own.
 */
export function groupMembership<
    Row extends { permissions?: number; deny?: boolean },
    Item extends GroupBulkAddItem,
>(dialog: MatDialog, options: GroupMembershipOptions<Row, Item>) {
    const { one, many } = options;
    const saving = signal(false);

    /** Whether an item is already a member or is in another domain */
    const exclude = (item: Item) => {
        const authority_id = options.authority_id();
        const item_authority = options.item_authority(item);
        return (
            options.rows().some((row) => options.member_id(row) === item.id) ||
            (!!authority_id &&
                !!item_authority &&
                item_authority !== authority_id)
        );
    };

    const add = async (item: Item) => {
        if (!item?.id) return;
        try {
            await options.add(item.id);
        } catch (error) {
            return notifyError(
                i18n(`${one}_ADD_ERROR`, { error: describeError(error) }),
            );
        }
        notifySuccess(i18n(`${one}_ADD_SUCCESS`));
        options.changed();
    };

    const bulkAdd = async () => {
        const show_permissions = !!options.bulk_permissions;
        const result = await waitForEvent(
            dialog
                .open<
                    GroupBulkAddModalComponent<Item>,
                    GroupBulkAddModalData<Item>,
                    GroupBulkAddResult<Item>
                >(GroupBulkAddModalComponent<Item>, {
                    data: {
                        title: `${many}_BULK`,
                        placeholder: options.search,
                        empty_message: `${many}_BULK_EMPTY`,
                        show_permissions,
                        permissions: options.bulk_permissions?.(),
                        query_fn: (q: string) =>
                            options.query(q, options.authority_id()),
                        exclude,
                    },
                    panelClass: 'bulk-add-dialog',
                    height: 'auto',
                    width: 'auto',
                    maxHeight: 'calc(100vh - 2em)',
                    maxWidth: 'calc(100vw - 2em)',
                })
                .afterClosed(),
        );
        const items = result?.items;
        if (!items?.length) return;
        const permissions = show_permissions
            ? +result.permissions || 0
            : undefined;
        saving.set(true);
        const results = await Promise.allSettled(
            items.map((item) => options.add(item.id, permissions)),
        );
        saving.set(false);
        const failed = results.filter((_) => _.status === 'rejected').length;
        if (failed) {
            notifyError(i18n(`${many}_BULK_ERROR`, { count: failed }));
        }
        const added = results.length - failed;
        if (added) {
            notifySuccess(i18n(`${many}_BULK_SUCCESS`, { count: added }));
        }
        options.changed();
    };

    const remove = async (row: Row) => {
        const details = await openConfirmModal(
            {
                title: i18n(`${one}_REMOVE`),
                content: i18n(`${one}_REMOVE_MSG`, {
                    name: escapeHtml(options.member_name(row)),
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            dialog,
        );
        if (details.reason !== 'done') return;
        details.loading(i18n(`${one}_REMOVE_LOADING`));
        try {
            await options.remove(row);
        } catch (error) {
            details.close();
            return notifyError(
                i18n(`${one}_REMOVE_ERROR`, { error: describeError(error) }),
            );
        }
        details.close();
        notifySuccess(i18n(`${one}_REMOVE_SUCCESS`));
        options.changed();
    };

    const editPermissions = async (row: Row) => {
        const result = await waitForEvent(
            dialog
                .open(GroupPermissionsModalComponent, {
                    data: {
                        title: `${one}_PERMISSIONS`,
                        permissions: row.permissions,
                        deny: row.deny,
                        show_deny: !!options.show_deny,
                    },
                })
                .afterClosed(),
        );
        if (!result) return;
        try {
            await options.update(row, {
                permissions: +result.permissions || 0,
                deny: !!result.deny,
            });
        } catch (error) {
            return notifyError(
                i18n(`${one}_SAVE_ERROR`, { error: describeError(error) }),
            );
        }
        notifySuccess(i18n(`${one}_SAVE_SUCCESS`));
        options.changed();
    };

    return {
        options,
        saving: saving.asReadonly(),
        exclude,
        add,
        bulkAdd,
        remove,
        editPermissions,
    };
}
