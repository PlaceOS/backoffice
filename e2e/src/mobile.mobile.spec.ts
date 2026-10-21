import { expect, test } from './fixtures/test-fixtures';
import { MobilePage } from './pages';

/**
 * Mobile E2E Tests
 *
 * Mobile flows on phone screens (Pixel 5, iPhone 12):
 * - sections open from the hamburger menu
 * - items are picked from the `item-selection` overlay
 */

const ACTIVITY_SPACE = '2.30.08 - Activity Space';

/** Sections reached from the menu and their route */
const MENU_SECTIONS = [
    { name: 'Zones', route: 'zones' },
    { name: 'Modules', route: 'modules' },
    { name: 'Drivers', route: 'drivers' },
    { name: 'Triggers', route: 'triggers' },
];

test.describe('Mobile', () => {
    let systems: MobilePage;

    test.beforeEach(async ({ page }) => {
        systems = new MobilePage(page, 'systems');
    });

    test.describe('Navigation', () => {
        test('hides the desktop lists behind the menu button', async () => {
            await systems.goto();

            await expect(systems.page.locator('item-sidebar')).toBeHidden();
            await expect(systems.menuButton).toBeVisible();
            await expect(systems.menu).not.toHaveClass(/!flex/);
        });

        test('the menu opens and closes', async () => {
            await systems.goto();
            await systems.pick(ACTIVITY_SPACE);

            await systems.openMenu();
            await expect(
                systems.page.locator('sidebar-menu a').filter({
                    hasText: 'PlaceOS',
                }),
            ).toBeVisible();
            await systems.closeMenu();
        });

        test('menu links open each section', async ({ page }) => {
            for (const section of MENU_SECTIONS) {
                await test.step(section.name, async () => {
                    // The picker covers the menu button until an item is picked
                    await systems.gotoItem('sys-QjJvCH7_dA');
                    await systems.openMenu();
                    await systems.menuLink(section.name).click();

                    await expect(page).toHaveURL(
                        new RegExp(`#/${section.route}/`),
                    );
                    await expect(systems.pickerInput).toBeVisible();
                });
            }
        });
    });

    test.describe('Item Picker', () => {
        test('opens with the item list when nothing is selected', async () => {
            await systems.goto();

            await expect(systems.pickerInput).toBeVisible();
            await expect(systems.pickerItem(ACTIVITY_SPACE)).toBeVisible();
        });

        test('search filters the list', async () => {
            await systems.goto();
            await systems.pickerInput.fill('2.30.09');

            await expect(
                systems.pickerItem('2.30.09 - Activity Space'),
            ).toBeVisible();
            await expect(systems.pickerItem(ACTIVITY_SPACE)).toHaveCount(0);
        });

        test('tapping an item opens its details and closes the picker', async ({
            page,
        }) => {
            await systems.goto();
            await systems.pickerItem(ACTIVITY_SPACE).tap();

            await expect(page).toHaveURL(/#\/systems\/sys-QjJvCH7_dA\//);
            await expect(systems.itemName).toHaveText(ACTIVITY_SPACE);
            await expect(systems.pickerInput).toBeHidden();
        });

        test('the picker opens again after a pick', async () => {
            await systems.goto();
            await systems.pick(ACTIVITY_SPACE);

            await systems.openPicker();
            await expect(systems.pickerInput).toHaveValue(ACTIVITY_SPACE);
            await systems.pick('2.30.09 - Activity Space');
        });
    });

    test.describe('Systems', () => {
        test('tabs show their content', async () => {
            await systems.goto();
            await systems.pick(ACTIVITY_SPACE);

            await systems.openTab('zones');

            await expect(
                systems.tabContent.getByRole('link', {
                    name: 'Tower 2',
                    exact: true,
                }),
            ).toBeVisible();
        });

        test('the edit form holds the current name', async () => {
            await systems.goto();
            await systems.pick(ACTIVITY_SPACE);
            await systems.openEditModal();

            await expect(
                systems.dialog.getByPlaceholder('System Name'),
            ).toHaveValue(ACTIVITY_SPACE);
        });

        test('closing the edit form keeps the system unchanged', async () => {
            await systems.goto();
            await systems.pick(ACTIVITY_SPACE);
            await systems.openEditModal();

            await systems.dialog
                .getByPlaceholder('System Name')
                .fill('Not Saved');
            await systems.discardChanges();

            await expect(systems.dialog).toBeHidden();
            await expect(systems.itemName).toHaveText(ACTIVITY_SPACE);
        });
    });
});
