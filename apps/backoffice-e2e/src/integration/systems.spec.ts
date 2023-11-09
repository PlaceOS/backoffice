import { uniqueNamesGenerator, Config, animals } from 'unique-names-generator';
const path = require('path');
const downloadsFolder = Cypress.config('downloadsFolder');

const config = {
    dictionaries: [animals],
};

describe('Systems test', () => {
    beforeEach(() => {
        cy.login();
        cy.wait(1000);
        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(500);
    });

    let system_name = uniqueNamesGenerator(config);
    let module_name = uniqueNamesGenerator(config);
    let module_name2 = uniqueNamesGenerator(config);
    let module_name3 = uniqueNamesGenerator(config);
    let zone_name = uniqueNamesGenerator(config);
    let trigger_name = uniqueNamesGenerator(config);

    it('Can create a system', () => {
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('[placeholder="Search for zone..."]').click();
        cy.get('*[class^="mat-option-text"]').first().click({ force: true });
        cy.get('[placeholder="System Name"]').click().type(system_name);
        cy.contains('Save').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can prevent the wrong format of email for a system being saved', () => {
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('[placeholder="Search for zone..."]').click();
        cy.get('*[class^="mat-option-text"]').first().click({ force: true });
        cy.get('[placeholder="System Name"]').click().type(system_name);
        cy.get('[placeholder="System Email"]').click().type(system_name);

        cy.get('*[class^="mat-button-wrapper"]').contains('Save').click();
        cy.get('*[class^="mat-button-wrapper"]')
            .contains('Save')
            .should('exist');
        cy.get('*[class^="mat-button-wrapper"]').contains('Cancel').click();
    });

    it('Can prevent the wrong format of support URL for a system being saved', () => {
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('[placeholder="Search for zone..."]').click();
        cy.get('*[class^="mat-option-text"]').first().click({ force: true });
        cy.get('[placeholder="System Name"]').click().type(system_name);
        cy.get('[placeholder="Support URL"]').click().type(system_name);

        cy.get('*[class^="mat-button-wrapper"]').contains('Save').click();
        cy.get('*[class^="mat-button-wrapper"]')
            .contains('Save')
            .should('exist');
        cy.get('*[class^="mat-button-wrapper"]').contains('Cancel').click();
    });

    it('Can select a system', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="font-medium text-lg"]').contains('Settings');
    });

    it('Can filter the systems', () => {
        cy.get('*[class^="search"]').type(system_name);
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .should('have.length', 1);
        cy.get('*[class^="search"]').clear();
    });

    it('Can start a system', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.contains('Start System').click();
        cy.contains('Ok').click();
    });

    it('Can cancel starting a system', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.contains('Start System').click();
        cy.contains('Cancel').click();
    });

    it('Can stop a system', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.contains('Stop System').click();
        cy.contains('Ok').click();
        // FEEDBACK ?
    });

    it('Can cancel stopping a system', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.contains('Stop System').click();
        cy.contains('Cancel').click();
    });

    it('Can supply new Unencrypted System settings', () => {
        cy.get('*[class^="search"]').type(system_name);
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({
                force: true,
            });
        cy.contains('Unencrypted').click({
            force: true,
        });
        cy.get('*[class^="view-lines monaco-mouse-cursor-text"]')
            .click()
            .type('"{bool_setting" : true}', {
                parseSpecialCharSequences: false,
            });
        cy.wait(1000);
        cy.contains('Save').click({
            force: true,
        });
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can supply new Unencrypted System settings but not save them', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({
                force: true,
            });
        cy.contains('Unencrypted').click({
            force: true,
        });
        cy.get('*[class^="view-lines monaco-mouse-cursor-text"]')
            .click()
            .type('"{bool_setting" : true}', {
                parseSpecialCharSequences: false,
            });
        cy.wait(1000);
        cy.contains('Clear').click({
            force: true,
        });
        cy.contains(/^Unencrypted$/);
        // TO:DO imrpove test
    });

    it('Can see which Modules the selected System is used in', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        // cy.get('*[class^="overflow-x-auto ng-star-inserted"]')
    });

    it('Can create a new module for this System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.contains('Add new').click();
        cy.get('[placeholder="Search for driver..."]').click();
        cy.wait(1000);
        cy.get('*[class^="mat-option-text"]').first().click({ force: true });
        cy.wait(1000);
        cy.get('[placeholder="Custom Name"]').click().type(module_name);
        cy.contains('Save').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can navigate to new module in this System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.get('*[class^="truncate underline w-full"]')
            .first()
            .then(($hd) => {
                let name = $hd.text();
                cy.get('*[class^="truncate underline w-full"]').first().click();
                cy.wait(1000);
                cy.get('*[class^="underline"]').contains(name);
            });
    });

    it('Can edit a module in this System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.get('*[class^="backoffice-edit ng-star-inserted"]').first().click();
        cy.wait(1000);
        let new_module_name = uniqueNamesGenerator(config);
        cy.get('[placeholder="Custom Name"]').clear().type(new_module_name);
        cy.contains('Save').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can toggle a module in this System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.get('*[class^="w-24 flex px-2 justify-center"]')
            .first()
            .within(() => {
                cy.get(
                    '*[class^="backoffice-dots-three-vertical ng-star-inserted"]'
                )
                    .first()
                    .click();
            });
        cy.contains('Toggle Power').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'successfully'
        );

        cy.get('*[class^="w-24 flex px-2 justify-center"]')
            .first()
            .within(() => {
                cy.get(
                    '*[class^="backoffice-dots-three-vertical ng-star-inserted"]'
                )
                    .first()
                    .click();
            });
        cy.contains('Toggle Power').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'successfully'
        );
    });

    it('Can load a module in this System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.get('*[class^="w-24 flex px-2 justify-center"]')
            .first()
            .within(() => {
                cy.get(
                    '*[class^="backoffice-dots-three-vertical ng-star-inserted"]'
                )
                    .first()
                    .click();
            });
        cy.contains('Load Module').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can also toggle a module in this System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.get('*[class^="h-4 w-4 rounded-full bg-base-content"]')
            .first()
            .click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'successfully'
        );

        cy.get('*[class^="w-24 flex px-2 justify-center"]')
            .first()
            .within(() => {
                cy.get(
                    '*[class^="backoffice-dots-three-vertical ng-star-inserted"]'
                )
                    .first()
                    .click();
            });
        cy.contains('Toggle Power').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'successfully'
        );
    });

    it('Can remove a module in this System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.get('*[class^="w-24 flex px-2 justify-center"]')
            .first()
            .within(() => {
                cy.get(
                    '*[class^="backoffice-dots-three-vertical ng-star-inserted"]'
                )
                    .first()
                    .click();
            });
        cy.contains('Remove Module').click();
        cy.contains('Ok').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can execute a command on a module in this System', () => {
        let var23;
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });

        // create a module
        cy.contains('Add new').click();
        cy.get('[placeholder="Search for driver..."]').click();
        cy.wait(1000);
        cy.get('*[class^="mat-option-text"]').first().click({ force: true });
        cy.wait(1000);
        cy.get('[placeholder="Custom Name"]').click().type(module_name2);
        cy.contains('Save').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });

        // start module
        cy.get('*[class^="w-24 flex px-2 justify-center"]')
            .first()
            .within(() => {
                cy.get(
                    '*[class^="backoffice-dots-three-vertical ng-star-inserted"]'
                )
                    .first()
                    .click();
            });
        cy.contains('Toggle Power').click();
        //cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("successfully");
        cy.reload();
        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.get('[placeholder="Select module"]').click();
        cy.get('*[class^="mat-option-text"]')
            .contains(module_name2 + ' 1')
            .click({ force: true });
        cy.get('[placeholder="Select method"]').click();
        cy.get('*[class^="mat-option-text"]').first().click({ force: true });
        cy.get('[placeholder="phone_numbers"]').type('040000');
        cy.get('[placeholder="message"]').type('custom message');
        cy.get(
            '*[class^="mat-focus-indicator flex-1 mat-button mat-button-base"]'
        )
            .contains('Execute')
            .click();
    });

    it('Can view the response of the executed function', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });

        // create a module
        cy.contains('Add new').click();
        cy.get('[placeholder="Search for driver..."]').click();
        cy.wait(1000);
        cy.get('*[class^="mat-option-text"]').first().click({ force: true });
        cy.wait(1000);
        cy.get('[placeholder="Custom Name"]').click().type(module_name3);
        cy.contains('Save').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });

        // start module
        cy.get('*[class^="w-24 flex px-2 justify-center"]')
            .first()
            .within(() => {
                cy.get(
                    '*[class^="backoffice-dots-three-vertical ng-star-inserted"]'
                )
                    .first()
                    .click();
            });
        cy.contains('Toggle Power').click();
        //cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("successfully");
        cy.reload();
        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Modules').click({ force: true });
        cy.get('[placeholder="Select module"]').click();
        cy.get('*[class^="mat-option-text"]')
            .contains(module_name3 + ' 1')
            .click({ force: true });
        cy.get('[placeholder="Select method"]').click();
        cy.get('*[class^="mat-option-text"]').first().click({ force: true });
        cy.get('[placeholder="phone_numbers"]').type('040000');
        cy.get('[placeholder="message"]').type('custom message');
        cy.get(
            '*[class^="mat-focus-indicator flex-1 mat-button mat-button-base"]'
        )
            .contains('Execute')
            .click();

        cy.contains(/^View/).click({ force: true });
        //cy.contains('Exec Request Results');
    });

    it('Can add a zone to this System', () => {
        // create zone
        cy.visit('https://localhost:8443/backoffice/#/zones/-/about');
        cy.wait(1000);
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('input[name="zone-name"]').type(zone_name);
        cy.contains('Save').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(500);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Zones').click({ force: true });

        // create a module
        cy.get('[placeholder="Search for zone..."]').click();
        cy.wait(1000);
        cy.get('*[class^="mat-option-text"]')
            .contains(zone_name)
            .click({ force: true });
        cy.wait(1000);
        cy.contains('Save Pending').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Navigates to the selected zone', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Zones').click({ force: true });
        cy.wait(1000);
        cy.contains(zone_name).click();
        cy.wait(1000);
        cy.contains(zone_name);
    });

    it('Can remove a zone from this System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Zones').click({ force: true });
        cy.wait(1000);
        cy.get('*[class^="backoffice-trash ng-star-inserted"]')
            .first()
            .click({ force: true });
        cy.contains('Ok').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can add a trigger to this System', () => {
        cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
        cy.wait(1000);
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('input[name="trigger-name"]').type(trigger_name);
        cy.contains('Save').click();
        cy.wait(50);

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Triggers').click({ force: true });
        cy.contains('Add Trigger').click();

        cy.get('*[class^="item-search-field"]').click();
        //cy.get('[placeholder="Search..."]').click();
        cy.wait(1000);
        cy.get('*[class^="mat-option-text"]')
            .contains(trigger_name)
            .click({ force: true });
        cy.contains(/^Add$/).click();
        cy.wait(1000);
        cy.reload();
        cy.contains(trigger_name);
    });

    it("Can copy the trigger's webhook link", () => {
        cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
        cy.wait(1000);
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('input[name="trigger-name"]').type(trigger_name);
        cy.contains('Save').click();
        cy.wait(50);

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Triggers').click({ force: true });
        cy.get('*[class^="backoffice-link ng-star-inserted"]').first().click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'copied'
        );
    });

    it("Can edit the trigger's state", () => {
        cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
        cy.wait(1000);
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('input[name="trigger-name"]').type(trigger_name);
        cy.contains('Save').click();
        cy.wait(50);

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Triggers').click({ force: true });
        cy.get('*[class^="backoffice-edit ng-star-inserted"]').first().click();

        cy.get('*[class^="mat-checkbox-inner-container"]').last().click();
        cy.contains('Save').click();
    });

    it('Can remove the trigger', () => {
        cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
        cy.wait(1000);
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('input[name="trigger-name"]').type(trigger_name);
        cy.contains('Save').click();
        cy.wait(50);

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Triggers').click({ force: true });
        cy.get('*[class^="backoffice-trash ng-star-inserted"]').first().click();
        cy.contains('Ok').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can cancel removing the trigger', () => {
        cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
        cy.wait(1000);
        cy.get(
            '*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.get('input[name="trigger-name"]').type(trigger_name);
        cy.contains('Save').click();
        cy.wait(50);

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Triggers').click({ force: true });
        cy.contains('Add Trigger').click();

        cy.get('*[class^="item-search-field"]').click();
        //cy.get('[placeholder="Search..."]').click();
        cy.wait(1000);
        cy.get('*[class^="mat-option-text"]')
            .contains(trigger_name)
            .click({ force: true });
        cy.contains(/^Add$/).click();
        cy.wait(1000);
        cy.reload();
        cy.contains(trigger_name);

        cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({ force: true });
        cy.get('*[class^="name"]').contains('Triggers').click({ force: true });
        cy.get('*[class^="backoffice-trash ng-star-inserted"]').first().click();
        cy.contains('Cancel').click();
        cy.wait(1000);
        cy.reload();
        cy.contains(trigger_name);
    });

    it('Can create a new metadata field for a System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({
                force: true,
            });
        cy.get('*[class^="name"]').contains('Metadata').click({
            force: true,
        });
        cy.wait(1000);
        cy.get('*[class^="mat-button-wrapper"]')
            .contains('Add new Metadata Field')
            .click();
        cy.get('*[class^="mt-4 ng-star-inserted"]').click();
        cy.get('*[class^="view-lines monaco-mouse-cursor-text"]')
            .click()
            .type('{backspace}')
            .type('"bool_setting" : true}', {
                parseSpecialCharSequences: false,
            });
        cy.contains('Save').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Saved'
        );
    });

    it('Can edit metadata of a System', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({
                force: true,
            });
        cy.get('*[class^="name"]').contains('Metadata').click({
            force: true,
        });
        cy.wait(1000);
        cy.get('*[class^="backoffice-edit ng-star-inserted"]').click();
        cy.get('input[name="property-name"]').focus().clear().type('Field2');
        cy.get('*[class^="mat-focus-indicator mat-button mat-button-base"]')
            .contains('Update')
            .click();
    });

    it('Can delete metadata of a Systems', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({
                force: true,
            });
        cy.get('*[class^="name"]').contains('Metadata').click({
            force: true,
        });
        cy.wait(1000);
        cy.get('*[class^="backoffice-trash ng-star-inserted"]').click();
        cy.contains('Ok').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });

    it('Can flag incorrect metadata format', () => {
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({
                force: true,
            });
        cy.get('*[class^="name"]').contains('Metadata').click({
            force: true,
        });
        cy.wait(1000);
        cy.get('*[class^="mat-button-wrapper"]')
            .contains('Add new Metadata Field')
            .click();
        cy.get('*[class^="mt-4 ng-star-inserted"]').click();
        cy.get('*[class^="view-lines monaco-mouse-cursor-text"]')
            .click()
            .type('{backspace}');
        cy.wait(1000);
        cy.get('*[class^="ng-untouched ng-dirty ng-invalid"]').should('exist');
        cy.contains('Save').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'invalid'
        );
        cy.get('*[class^="view-lines monaco-mouse-cursor-text"]')
            .click()
            .type('}', {
                parseSpecialCharSequences: false,
            });
    });

    it('Can delete a system', () => {
        cy.get('*[class^="search"]').type(system_name);
        cy.wait(1000);
        cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]')
            .children()
            .first()
            .click({
                force: true,
            });
        cy.wait(1000);
        cy.get(
            '*[class^="backoffice-dots-three-vertical ng-star-inserted"]'
        ).click();
        cy.wait(1000);
        cy.contains('Delete system').click();
        cy.wait(1000);
        cy.contains('Ok').click();
        cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains(
            'Successfully'
        );
    });
});
