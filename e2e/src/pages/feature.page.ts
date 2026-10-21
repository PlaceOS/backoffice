import { Page } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Page Object for a list/detail section that needs no extra helpers,
 * e.g. `new FeaturePage(page, 'triggers')`
 */
export class FeaturePage extends BasePage {
    readonly path: string;

    constructor(page: Page, feature: string) {
        super(page);
        this.path = `/#/${feature}`;
    }
}
