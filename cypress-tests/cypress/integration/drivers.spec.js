const path = require("path");
const downloadsFolder = Cypress.config("downloadsFolder");
import 'cypress-wait-until';

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.visit('/')
  cy.get('input[name="email"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get("form").submit();
})

describe("Drivers test", () => {

  beforeEach(() => {
    //cy.login('support@place.tech', 'development')
    cy.login('xtassja@gmail.com', 'password')
    cy.wait(1000);
    cy.visit('https://localhost:8443/backoffice/#/drivers/-/about');
    cy.wait(500);
  })

  it("Can create a driver", () => {
    cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});

    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').last().click();
    cy.get('*[class^="mat-option-text"]').contains("drivers > whispir > messages.cr").click({force: true});

    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').last().click();
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.wait(6000);
    //cy.get('input[name="driver-name"]').clear().type("driver1");
    cy.contains('Save').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
  });

  it("Can select a driver", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="heading select-text"]').then(($hd) => {
			let driver = $hd.text().trim();
			expect(driver).to.eq("spec_helper");
		});
  });

  it("Can recompile a driver", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.contains('Recompile Driver').click();
    cy.contains('Ok').click();
    cy.wait(8000);
    // cy.waitUntil(function() {
    //     return cy.get('*[class^="ng-star-inserted"]').should('not.exist');
    //   });
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
  });

  it("Can supply new Unencrypted Driver settings", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().last().click({force: true});
    cy.contains('Unencrypted').click({
			force: true
		});
    cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('"{bool_setting" : true}', { parseSpecialCharSequences: false });
    cy.wait(1000);
    cy.contains('Save').click({
			force: true
		});
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

  it("Can filter Modules in a driver", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Modules').click({
			force: true
		});
    cy.get('*[id^="mat-input-0"]').click().type("Module");
    cy.wait(1000);
    cy.get('*[class^="overflow-y-auto"]').children().should('have.length', 1)
  });

  it("Can see which Modules the selected Driver is used in", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Modules').click({force: true });
    cy.get('*[class^="overflow-x-auto ng-star-inserted"]')
  });

  it("Can delete a driver", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().last().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.wait(1000);
		cy.contains('Delete driver').click();
		cy.wait(1000);
		cy.contains('Ok').click();
		cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});
});
