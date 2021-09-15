import {
	uniqueNamesGenerator,
	Config,
	animals
} from 'unique-names-generator';
const path = require("path");
const downloadsFolder = Cypress.config("downloadsFolder");

const config = {
	dictionaries: [animals]
}

Cypress.Commands.add('login', (username, password) => {
	cy.visit('/')
  cy.visit('/')
	cy.get('input[name="email"]').type(username);
	cy.get('input[name="password"]').type(password);
	cy.get("form").submit();
});

describe("Modules test", () => {
	beforeEach(() => {
		//cy.login('support@place.tech', 'development')
		cy.login('xtassja@gmail.com', 'password')
		cy.wait(1000);
		cy.visit('https://localhost:8443/backoffice/#/modules/-/about');
		cy.wait(500);
	});

	let module_name = uniqueNamesGenerator(config);
  let new_name = uniqueNamesGenerator(config)

	it("Can create a module", () => {
    // create driver needed
    cy.visit('https://localhost:8443/backoffice/#/drivers/-/about');
    cy.wait(1000);
    cy.get('*[class^="backoffice-plus ng-star-inserted"]').click();
    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});

    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').last().click();
    cy.get('*[class^="mat-option-text"]').contains("drivers > sharp > pn_series.cr").click({force: true});

    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').last().click();
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.wait(6000);
    cy.get('input[name="driver-name"]').clear().type(module_name);
    cy.contains('Save').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");

    //create module needed
    cy.visit('https://localhost:8443/backoffice/#/modules/-/about');
    cy.wait(1000);
    cy.get('*[class^="backoffice-plus ng-star-inserted"]').click();
    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').contains(module_name).click({force: true});
    cy.contains('Save').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

	it("Can select a module", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="font-medium text-lg"]').contains("Settings");
	});

	it("Can edit a module", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.contains('Edit module').click({
			force: true,
		});

		cy.get('[placeholder="Custom Name"]').click().type(new_name);
		cy.contains('Save').click({
			force: true
		})
		cy.get('*[class^="heading select-text"]').contains(new_name);
	});

  it.skip("Can filter the modules", () => {
		cy.get('*[class^="search"]').type(new_name);
		cy.wait(1000);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().should('have.length', 1)
		cy.get('*[class^="search"]').clear();
	});

	it.only("Can see which systems the selected module is used in", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('Systems').click({
			force: true
		});
		cy.get('[placeholder="Filter systems..."]');
	});

	it.only("Can start the module", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.contains('Start Module').click()
	});

	it("Can export a module", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.get('*[class^="heading select-text"]').then(($hd) => {
			let user = $hd.text()
			user = user.trim().replace(/ /g, "_").toLowerCase();
			cy.wait(1000);
			cy.contains('Export module').click();
			cy.readFile(path.join(downloadsFolder, user + ".modules.tsv")).should("exist");
		});
	});

  it("Can supply new Unencrypted Module settings", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
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

	it("Can delete a module", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.wait(1000);
		cy.contains('Delete module').click();
		cy.wait(1000);
		cy.contains('Ok').click();
		cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});
});
