import { ENGINE_API } from '../../support/api';
import { roleFor } from '../../support/env';
import { expect, test } from '../../support/fixtures';

// Signs in through the real form, so it starts with no stored token
test.use({ storageState: { cookies: [], origins: [] } });

test('signs in through the platform login page', async ({ page }) => {
    const admin = roleFor('admin');
    const current_user = page.waitForResponse(
        (res) =>
            res.url().endsWith(`${ENGINE_API}/users/current`) &&
            res.status() === 200,
    );

    await page.goto('/#/systems');

    // The app sends the browser to the authority's login page
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await page.getByPlaceholder('Email').fill(admin.email);
    await page.getByPlaceholder('Password').fill(admin.password);
    await page.getByRole('button', { name: 'Log In' }).click();

    // ...and back into the app, signed in as that user
    const user = await (await current_user).json();
    expect(user.email).toBe(admin.email);
    await expect(page).toHaveURL(/#\/systems/);
    await expect(page.locator('sidebar-menu')).toBeVisible();
});
