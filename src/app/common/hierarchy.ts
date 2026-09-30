/** Item in a parent/child tree, such as a zone or a group */
export interface HierarchyItem {
    id: string;
    parent_id?: string;
}

/** Upper bound for parent chain walks. Deeper chains, or cycles in bad data, stop here. */
export const MAX_HIERARCHY_DEPTH = 32;

/** Whether `id` is `root_id` or one of its descendants */
export async function isInSubtree(
    id: string,
    root_id: string,
    parentOf: (id: string) => Promise<string>,
): Promise<boolean> {
    let current = id;
    for (let depth = 0; current && depth < MAX_HIERARCHY_DEPTH; depth++) {
        if (current === root_id) return true;
        current = await parentOf(current);
    }
    return false;
}

/**
 * Creates a filter that removes `root_id` and its descendants from a list.
 * Parent pickers use it so that a user cannot make an item its own ancestor.
 *
 * The filter walks up the parent chain of each item. Items in the list give
 * their own parent ID. `load` fetches the other ancestors once, and the result
 * is cached, so the cost is one request per unknown ancestor.
 * An ancestor that fails to load counts as a root item.
 */
export function subtreeFilter(load: (id: string) => Promise<HierarchyItem>) {
    const parents = new Map<string, Promise<string>>();
    const parentOf = (id: string) => {
        if (!parents.has(id)) {
            parents.set(
                id,
                load(id).then(
                    (item) => item?.parent_id || '',
                    () => '',
                ),
            );
        }
        return parents.get(id);
    };
    return async <T extends HierarchyItem>(
        items: T[],
        root_id: string,
    ): Promise<T[]> => {
        if (!root_id) return items;
        for (const item of items) {
            parents.set(item.id, Promise.resolve(item.parent_id || ''));
        }
        const hidden = await Promise.all(
            items.map((item) => isInSubtree(item.id, root_id, parentOf)),
        );
        return items.filter((_, index) => !hidden[index]);
    };
}
