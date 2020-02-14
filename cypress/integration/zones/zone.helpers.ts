/**
 * Perform the steps to create a system
 */
export function createZone(zone: { [name: string]: any } = {}) {
    cy.visit('localhost:4200/#/zones');
    const add_button = cy.get('sidebar .add');
    add_button.should('be.visible');
    add_button.click();
    const modal = cy.get('item-modal').first();
    cy.get('item-modal').get('header').contains('Zone').should('exist').should('be.visible');
    const modal_contents = modal.get('.body');
    modal_contents.should('be.visible');
    modal_contents.get('[name="zone-name"]').type(zone.name || 'Test System');
    if (zone.tags) {
        modal_contents.get('[name="tags"]').type(zone.email);
    }
    if (zone.description) {
        modal_contents.get('[name="description"]').type(zone.description);
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
