import {
	uniqueNamesGenerator,
	Config,
	names
} from 'unique-names-generator';
const path = require("path");
const downloadsFolder = Cypress.config("downloadsFolder");

const config = {
	dictionaries: [names]
}

Cypress.Commands.add('login', (username, password) => {
	cy.visit('/')
	cy.get('input[name="email"]').type(username);
	cy.get('input[name="password"]').type(password);
	cy.get("form").submit();
})

describe("Users test", () => {
	beforeEach(() => {
		//cy.login('support@place.tech', 'development')
		cy.login('xtassja@gmail.com', 'password')
		cy.wait(1000);
		cy.visit('https://localhost:8443/backoffice/#/users/-/about');
		cy.wait(500);
	});

	let first_name = uniqueNamesGenerator(config);
	let last_name = uniqueNamesGenerator(config);

	it("Can create a user", () => {
		cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
		cy.wait(1000);
		cy.get('input[name="first-name"]').type(first_name);
		cy.get('input[name="last-name"]').type(last_name);
		cy.get('input[name="useremail"]').type(first_name + "@email.au");
		cy.get('input[name="new-password"]').type(last_name + "123!");
		cy.get('input[name="confirm-password"]').type(last_name + "123!");
		cy.contains('Save').click();
		cy.wait(50);
	});

	it("Can filter the users", () => {
		cy.get('*[class^="search"]').type(first_name);
		cy.wait(1000);
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().should('have.length', 1)
		cy.get('*[class^="search"]').clear();
	});

	it("Can select a user", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="w-40 p-2"]').contains("User Role");
	});

	it("Can edit a user", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.contains('Edit user').click({
			force: true,
		});
		let new_name = uniqueNamesGenerator(config)
		cy.get('input[name="first-name"]').clear().type(new_name);
		cy.contains('Save').click()
		cy.get('*[class^="heading select-text"]').contains(new_name);
	});

	it("Can delete a user", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.wait(1000);
		cy.contains('Delete user').click();
		cy.wait(1000);
		cy.contains('Ok').click();
		// get name of user and filter to get 0 OR
		cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
	});

	it("Can export a user", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
		cy.get('*[class^="heading select-text"]').then(($hd) => {
			let user = $hd.text()
			user = user.trim().replace(/ /g, "_").toLowerCase();
			cy.wait(1000);
			cy.contains('Export user').click();
			cy.readFile(path.join(downloadsFolder, user + ".users.tsv")).should("exist");
		})
	});

	it("Can create a new metadata field for a User", () => {
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

	it("Can flag incorrect metadata format", () => {
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

	it("Can edit metadata of a User", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('Metadata').click({
			force: true
		});
		cy.wait(1000);
		cy.get('*[class^="backoffice-edit ng-star-inserted"]').click();
		cy.get('input[name="property-name"]').clear().type("Field2");
		cy.contains('Update').click();
	});

	it("Can see the history of a user's actions", () => {
		cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({
			force: true
		});
		cy.get('*[class^="name"]').contains('History').click({
			force: true
		});
		cy.wait(1000);
		cy.get('*[class^="ng-star-inserted"]')
	});
});
