import { expect, test } from '../../support/fixtures';

test('an admin can open the domains section', async ({ page }) => {
    await page.goto('/#/domains');

    await expect(page).toHaveURL(/#\/domains/);
    await expect(page.locator('item-sidebar')).toBeVisible();
});

test('a user who is not an admin is sent to the 403 page', async ({
    staffPage,
}) => {
    await staffPage.goto('/#/domains');

    await expect(staffPage).toHaveURL(/#\/unauthorised/);
    await expect(staffPage.getByRole('heading', { name: '403' })).toBeVisible();
});
