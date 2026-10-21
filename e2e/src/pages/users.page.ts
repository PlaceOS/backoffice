import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Page Object for the Users section
 */
export class UsersPage extends BasePage {
    readonly path = '/#/users';

    constructor(page: Page) {
        super(page);
    }

    /** Text field of the open create/edit modal by its label */
    field(label: string): Locator {
        return this.dialog.getByRole('textbox', { name: label, exact: true });
    }

    /**
     * Fill the required fields of the open create user modal.
     * Waits for the form to pick the default domain first.
     */
    async fillNewUser(data: {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
    }): Promise<void> {
        await expect(
            this.dialog.getByRole('combobox', { name: 'Domain' }),
        ).toContainText('Place Technology');
        await this.field('First Name*').fill(data.first_name);
        await this.field('Last Name*').fill(data.last_name);
        await this.field('Email*').fill(data.email);
        await this.field('Password').fill(data.password);
        await this.field('Confirm Password').fill(data.password);
    }

    /** Search for a user by name and select them */
    async openUser(name: string): Promise<void> {
        await this.goto();
        await this.search(name);
        await this.itemLink(name).first().click();
        await this.waitForItemDetails();
    }
}
