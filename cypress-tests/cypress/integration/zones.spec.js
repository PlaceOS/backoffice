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

describe("Zones test", () => {
	beforeEach(() => {
		//cy.login('support@place.tech', 'development')
		cy.login('xtassja@gmail.com', 'password')
		cy.wait(1000);
		cy.visit('https://localhost:8443/backoffice/#/zones/-/about');
		cy.wait(500);
	});

	let zone_name = uniqueNamesGenerator(config);
  let new_name = uniqueNamesGenerator(config)

	it("Can create a zone", () => {
		cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
		cy.wait(1000);
		cy.get('input[name="zone-name"]').type(zone_name);
		// cy.get('input[name="last-name"]').type(last_name);
		// cy.get('input[name="useremail"]').type(first_name + "@email.au");
		cy.contains('Save').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

  it("Can add a zone to a System", () => {
    cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
    cy.wait(1000);
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
    cy.wait(1000);
    cy.get('*[class^="name"]').contains('Zones').click({force: true });
    cy.get('*[id^="mat-input-0"]').click().type(zone_name);
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.wait(1000);
    cy.contains('Save Pending').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

  it("Can search for systems in a Zone", () => {
    cy.get('*[class^="search"]').type(zone_name);
		cy.wait(1000);
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Systems').click({
			force: true
		});
    cy.get('*[id^="mat-input-0"]').click().type("System");
    //cy.get('*[class^="ng-star-inserted"]').children().should('have.length', 1)
	});

  it("Can prevent the a zone being saved without a name", () => {
    cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
		cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').click();
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').should('exist');
    cy.get('*[class^="mat-button-wrapper"]').contains('Cancel').click();
    // red toast bar
  });

	it("Can filter the zones", () => {
		cy.get('*[class^="search"]').type(zone_name);
		cy.wait(1000);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().should('have.length', 1)
		cy.get('*[class^="search"]').clear();
	});

	it("Can select a zone", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.contains("Created:");
	});

	it("Can export a zone", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.get('*[class^="heading select-text"]').then(($hd) => {
			let zone = $hd.text()
			zone = zone.trim().replace(/ /g, "_").toLowerCase();
			cy.wait(1000);
			cy.contains('Export zone').click();
			cy.readFile(path.join(downloadsFolder, zone + ".zones.tsv")).should("exist");
		})
	});

	it("Can create a new metadata field for a User", () => {
    cy.get('*[class^="search"]').type(zone_name);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('Metadata').click({
			force: true
		});
		cy.wait(1000);
		cy.get('*[class^="mat-button-wrapper"]').contains('Add new Metadata Field').click();
		cy.get('*[class^="mt-4 ng-star-inserted"]').click();
		cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('{backspace}').type('"bool_setting" : true}', {
			parseSpecialCharSequences: false
		});
		cy.contains('Save').click();
		cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Saved");
	});

  it("Can edit metadata of a Zone", () => {
    cy.get('*[class^="search"]').type(zone_name);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('Metadata').click({
			force: true
		});
		cy.wait(1000);
		cy.get('*[class^="backoffice-edit ng-star-inserted"]').click();
		cy.get('input[name="property-name"]').focus().clear().type("Field2");
		cy.get('*[class^="mat-focus-indicator mat-button mat-button-base"]').contains('Update').click();
	});

  it("Can delete metadata of a Zone", () => {
    cy.get('*[class^="search"]').type(zone_name);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('Metadata').click({
			force: true
		});
		cy.wait(1000);
		cy.get('*[class^="backoffice-trash ng-star-inserted"]').click();
    cy.contains('Ok').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

  it("Can edit a zone", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.contains('Edit zone').click({
			force: true,
		});
    cy.wait(1000);
		cy.get('input[name="zone-name"]').focus().clear().type(new_name);
    cy.wait(1000);
		cy.contains('Save').click({force: true})
		cy.get('*[class^="heading select-text"]').contains(new_name);
	});

	it("Can flag incorrect metadata format", () => {
    cy.get('*[class^="search"]').type(new_name);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().last().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('Metadata').click({
			force: true
		});
		cy.wait(1000);
		cy.get('*[class^="mat-button-wrapper"]').contains('Add new Metadata Field').click();
		cy.get('*[class^="mt-4 ng-star-inserted"]').click();
		cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('{backspace}')
		cy.wait(1000);
		cy.get('*[class^="ng-untouched ng-dirty ng-invalid"]').should('exist');
		cy.contains('Save').click();
		cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("invalid");
		cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('}', {
			parseSpecialCharSequences: false
		});
	});

	it("Can see which systems the selected zone is used in", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('Systems').click({
			force: true
		});
		// to do, add systems?
	});

  it("Can supply new Unencrypted Zone settings", () => {
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

  it("Can associate a new trigger with a Zone", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Triggers').click({
			force: true
		});
    cy.get('*[class^="mat-button-wrapper"]').contains('Add Trigger').click();
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains(/^Add$/).click({force: true});
    cy.get('*[class^="truncate"]');
	});

  it("Can search for triggers in a Zone", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Triggers').click({
			force: true
		});
    cy.get('[placeholder="Filter triggers..."]');
	});

  it("Can delete a trigger from a Zone", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Triggers').click({
			force: true
		});

    cy.get('*[class^="backoffice-trash ng-star-inserted"]').click()
    cy.contains('Ok').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

  it("Can add a child Zone to a parent Zone", () => {
    let child_name = uniqueNamesGenerator(config);
    cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
    cy.wait(1000);
    cy.get('input[name="zone-name"]').type(child_name);
    cy.get('*[class^="item-search-field"]').click().type(new_name);
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.contains('Save').click();
    cy.get('*[class^="search"]').type(new_name);
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Children').click({
			force: true
		});
    cy.get('*[class^="ng-star-inserted"]').contains(child_name);
	});

  it("Can delete a zone", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.wait(1000);
		cy.contains('Delete zone').click();
		cy.wait(1000);
		cy.contains('Ok').click();
		cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});
});
