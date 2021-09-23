import {
	uniqueNamesGenerator,
	Config,
	animals,
	colors
} from 'unique-names-generator';
const path = require("path");
const downloadsFolder = Cypress.config("downloadsFolder");

const config = {
	dictionaries: [animals]
}

const config2 = {
	dictionaries: [colors]
}

Cypress.Commands.add('login', (username, password) => {
	cy.visit('/')
  cy.visit('/')
	cy.get('input[name="email"]').type(username);
	cy.get('input[name="password"]').type(password);
	cy.get("form").submit();
});

describe("Triggers test", () => {
	beforeEach(() => {
		//cy.login('support@place.tech', 'development')
		cy.login('xtassja@gmail.com', 'password')
		cy.wait(1000);
		cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
		cy.wait(500);
	});

	let trigger_name = uniqueNamesGenerator(config);

	it("Can create a trigger", () => {
		cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
		cy.wait(1000);
		cy.get('input[name="trigger-name"]').type(trigger_name);
		cy.contains('Save').click();
		cy.wait(50);

		let trigger_name2 = uniqueNamesGenerator(config);

		cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
		cy.wait(1000);
		cy.get('input[name="trigger-name"]').type(trigger_name2);
		cy.contains('Save').click();
		cy.wait(50);
	});

	it("Can filter the triggers", () => {
		let trigger_name3 = uniqueNamesGenerator(config2);

		cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
		cy.wait(1000);
		cy.get('input[name="trigger-name"]').type(trigger_name3);
		cy.contains('Save').click();
		cy.wait(50);

		cy.get('*[class^="search"]').type(trigger_name3);
		cy.wait(2000);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().should('have.length', 1)
		cy.get('*[class^="search"]').clear();
	});

	it("Can select a trigger", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="font-medium text-lg"]').contains("Conditions");
	});

  it("Can add a new trigger condition", () => {
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
    cy.get('*[class^="mat-option-text"]').contains("drivers > message_media > sms.cr").click({force: true});

    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').last().click();
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.contains('Loading driver details for commit...', { timeout: 80000 }).should('not.exist');
    cy.get('input[name="driver-name"]').clear().type("trigger-driver");
    cy.contains('Save').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");

    //create module needed
    cy.visit('https://localhost:8443/backoffice/#/modules/-/about');
    cy.wait(1000);
    cy.get('*[class^="backoffice-plus ng-star-inserted"]').click();
    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').contains("trigger-driver").click({force: true});
    cy.contains('Save').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");

    // add to system
    cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
    cy.wait(1000);
    cy.get('*[class^="name"]').contains('Modules').click({force: true });
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.wait(1000);
    cy.contains('Add existing').click({force: true});
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");

    // now we get to the actual trigger
    cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
    cy.wait(1000);
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.wait(1000);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});

    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.wait(1000);
    cy.get('*[class^="mat-focus-indicator mat-icon-button mat-button-base"]').first().click();

    cy.get('*[class^="mat-select"]').contains("Select module").click();
    cy.get('*[class^="mat-option-text"]').last().click({force: true});

    cy.get('*[class^="mat-select"]').contains("Select status variable").click();
    cy.get('*[class^="mat-option-text"]').last().click({force: true});
    cy.get('[placeholder="Status variable subkeys..."]').click().type("orange");
    cy.get('[placeholder="true/false, \'string\', 123.456"]').click().type("4");
    cy.get('*[class^="mat-button-wrapper"]').contains('Add').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

  it("Can add a new trigger action", () => {
    // create driver needed
    cy.visit('https://localhost:8443/backoffice/#/drivers/-/about');
    cy.wait(1000);
    cy.get('*[class^="backoffice-plus ng-star-inserted"]').click();
    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(3000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});

    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').last().click();
		cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').contains("drivers > message_media > sms.cr").click({force: true});

    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').last().click();
		cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').contains("feat: migrate to standalone drivers").click({force: true});

    cy.contains('Loading driver details for commit...', { timeout: 80000 }).should('not.exist');
    cy.get('input[name="driver-name"]').clear().type("trigger-driver");
    cy.contains('Save').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");

    //create module needed
    cy.visit('https://localhost:8443/backoffice/#/modules/-/about');
    cy.wait(1000);
    cy.get('*[class^="backoffice-plus ng-star-inserted"]').click();
    cy.wait(1000);
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').contains("trigger-driver").click({force: true});
    cy.contains('Save').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");

    // add to system
    cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
		cy.wait(3000);
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
    cy.wait(1000);
    cy.get('*[class^="name"]').contains('Modules').click({force: true });
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.wait(1000);
    cy.contains('Add existing').click({force: true});
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");

    // now we get to the actual trigger
    cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
    cy.wait(1000);
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});

		cy.wait(1000);
    cy.get('*[class^="item-search-field"]').click();
    cy.wait(1000);
    cy.get('*[class^="mat-option-text"]').first().click({force: true});
    cy.wait(1000);
    cy.get('*[class^="mat-focus-indicator mat-icon-button mat-button-base"]').last().click();

    cy.get('*[class^="mat-select"]').first().click();
    cy.get('*[class^="mat-option-text"]').last().click({force: true});
    cy.get('[placeholder="New email..."]').click().type("place@os.com");
    cy.get('[placeholder="Email body contents..."]').click().type("This is the email body...");
    cy.get('*[class^="mat-button-wrapper"]').contains('Add').click();
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

	it("Can see which systems the selected trigger is used in", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('Instances').click({
			force: true
		});
		cy.get('*[class^="mat-tab-link mat-focus-indicator tab ng-star-inserted mat-tab-label-active"]').contains('Instances');
	});


	it("Can edit a trigger", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.contains('Edit trigger').click({
			force: true,
		});
		let new_name = uniqueNamesGenerator(config)
		cy.get('input[name="trigger-name"]').focus().clear()
		cy.get('input[name="trigger-name"]').type(new_name);
		cy.contains('Save').click({
			force: true
		})
		cy.get('*[class^="heading select-text"]').contains(new_name);
	});

	it("Can export a trigger", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.get('*[class^="heading select-text"]').then(($hd) => {
			let user = $hd.text()
			user = user.trim().replace(/ /g, "_").toLowerCase();
			cy.wait(1000);
			cy.contains('Export trigger').click();
			cy.readFile(path.join(downloadsFolder, user + ".triggers.tsv")).should("exist");
		});
	});

	it("Can delete a trigger", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.wait(1000);
		cy.contains('Delete trigger').click();
		cy.wait(1000);
		cy.contains('Ok').click();
		cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});
});
