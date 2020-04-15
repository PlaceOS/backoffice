
/**
 * Perform the steps to create a system
 */
export function createSystem(system: { [name: string]: any } = {}) {
    const add_button = cy.get('sidebar .add');
    add_button.should('be.visible');
    add_button.click();
    const modal = cy.get('item-modal').first();
    cy.get('item-modal').get('header').contains('System').should('exist').should('be.visible');
    const modal_contents = modal.get('.body');
    modal_contents.should('be.visible');
    modal_contents.get('[name="system-name"]').type(system.name || 'Test System');
    if (system.email) {
        modal_contents.get('[name="email"]').type(system.email);
    }
    if (system.support_url) {
        modal_contents.get('[name="support-url"]').type(system.support_url);
    }
    if (system.installed_ui_devices) {
        modal_contents.get('[name="ui-devices"]').type(system.installed_ui_devices);
    }
    if (system.capacity) {
        modal_contents.get('[name="capacity"]').type(system.capacity);
    }
    if (system.bookable) {
        modal_contents.get('[name="bookable"]').click();
    }
    if (system.description) {
        modal_contents.get('[name="description"]').type(system.description);
    }
    cy.get('mat-dialog-actions')
        .contains('Save')
        .trigger('mousedown');
    cy.get('mat-dialog-actions')
        .contains('Save')
        .trigger('mouseup');
    cy.wait(300);
    modal_contents.should('not.exist').should('not.be.visible');
}
