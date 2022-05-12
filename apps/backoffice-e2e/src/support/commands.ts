// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {
	uniqueNamesGenerator,
	Config,
	animals
} from 'unique-names-generator';

const config = {
	dictionaries: [animals]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


Cypress.Commands.add('login', ()=> {
  let username = 'support@place.tech'
  let password = 'development'
	cy.visit('/')
  cy.visit('/')
	cy.get('input[name="email"]').type(username);
	cy.get('input[name="password"]').type(password);
	cy.get("form").submit();
});

Cypress.Commands.add('addDriver', (name = "MyDriver")=> {
  cy.visit('https://localhost:8443/backoffice/#/drivers/-/about');
  cy.wait(1000);
  cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
  cy.wait(1000);
  cy.get('[placeholder="Search for repository..."]').click();
  cy.wait(1000);
  cy.get('*[class^="mat-option-text"]').first().contains("Drivers").click({force: true});
  cy.wait(1000);
  cy.get('[placeholder="Search for driver..."]').click();
  cy.wait(1000);
  cy.get('*[class^="mat-option-text"]').contains("drivers > whispir > messages.cr").click({force: true});
  cy.wait(1000);
  cy.get('[placeholder="Search for commit..."]').click();
  cy.wait(1000);
  cy.get('*[class^="mat-option-text"]').contains("feat: migrate to standalone drivers").click({force: true});
  cy.contains('Loading driver details for commit...', { timeout: 80000 }).should('not.exist');
  cy.get('[placeholder="Driver Name"]').focus().clear().type(name);
  cy.contains('Save').click();
  cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
});

Cypress.Commands.add('addSystem', (system_name) => {
  cy.visit('https://localhost:8443/backoffice/#/systems/-/about');
  cy.wait(1000);
  cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
  cy.wait(1000);
  cy.get('[placeholder="Search for zone..."]').click();
  cy.wait(1000);
  cy.get('*[class^="mat-option-text"]').first().click({force: true});
  cy.get('[placeholder="System Name"]').click().type(system_name)
  cy.contains('Save').click();
  cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully added system");
});

Cypress.Commands.add('addModule', (driver_name) => {
  cy.visit('https://localhost:8443/backoffice/#/modules/-/about');
  cy.wait(1000);
  cy.get('*[class^="backoffice-plus ng-star-inserted"]').click();
  cy.wait(1000);
  cy.get('*[class^="item-search-field"]').click();
  cy.wait(1000);
  cy.get('*[class^="mat-option-text"]').contains(driver_name).click({force: true});
  cy.contains('Save').click();
  cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully added module");
});

Cypress.Commands.add('addTrigger', (trigger_name) => {
  cy.visit('https://localhost:8443/backoffice/#/triggers/-/about');
  cy.wait(1000);
  cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
  cy.wait(1000);
  cy.get('input[name="trigger-name"]').type(trigger_name);
  cy.contains('Save').click();
  cy.wait(50);
  cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully added trigger");
});
