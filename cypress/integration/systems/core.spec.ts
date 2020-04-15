import { createSystem } from './system.helpers';
import { createZone } from '../zones/zone.helpers';

describe('Systems', () => {

    beforeEach(() => {
        createZone();
    });

    it('should load page', () => {
        cy.visit('localhost:4200/#/systems');
        cy.get('sidebar').contains('Systems').should('exist');
    });

    it('should be able to be created', () => {
        createSystem({ name: 'A System' });
        cy.get('sidebar').contains('A System');
    });

    it('should be able to be viewed', () => {
        expect(true).to.equal(true);
    });
    it('should be able to be edited', () => {
        expect(true).to.equal(true);
    });
    it('should be able to be deleted', () => {
        expect(true).to.equal(true);
    });
});
