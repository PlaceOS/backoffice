function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const path = require("path");
const downloadsFolder = Cypress.config("downloadsFolder");

// const clipboardy = require('clipboardy');
//
// function getClipboard () {
//   return clipboardy.read();
// }

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.visit('/')
  cy.get('input[name="email"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get("form").submit();
})

describe("Domain test", () => {

  beforeEach(() => {
    //cy.login('support@place.tech', 'development')
    cy.login('xtassja@gmail.com', 'password')
    cy.wait(1000);
    cy.visit('https://localhost:8443/backoffice/#/domains/-/about');
    cy.wait(500);
  })
  let domain_name = "domain7" + getRandomInt(100);

  it("Can create a domain", () => {
    cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
    cy.wait(1000);
    cy.get('input[name="domain-name"]').type(domain_name);
    cy.get('input[name="domain"]').type("localhost" + getRandomInt(100))
    cy.contains('Save').click();
    cy.wait(50);
    cy.get('*[class^="heading select-text"]').contains(domain_name);
  });

  it("Can supply new domain settings", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('{backspace}').type('"bool_setting" : true}', { parseSpecialCharSequences: false });
  });

  it("Can flag incorrect domain settings", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('{backspace}')
    cy.wait(1000);
    cy.get('*[class^="ng-untouched ng-star-inserted ng-dirty ng-invalid"]').should('exist')
    cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('}',{ parseSpecialCharSequences: false });
  });

  it("Can filter the domains", () => {
    cy.get('*[class^="search"]').type(domain_name);
    cy.wait(1000);
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().should('have.length', 1)
    cy.get('*[class^="search"]').clear();
  });

  it("Can delete a domain", () => {
    cy.get('*[class^="search"]').type(domain_name);
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
    cy.wait(1000);
    cy.contains('Delete domain').click();
    cy.wait(1000);
    cy.contains('Ok').click()
    cy.get('*[class^="mat-simple-snackbar ng-star-inserted"]').contains("Successfully");
  });

  it("Can edit a domain", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click();
    cy.contains('Edit domain').click({force: true });
    cy.get('input[name="domain-name"]').focus().clear().type("newDomain");
    cy.contains('Save').click()
    cy.get('*[class^="heading select-text"]').contains('newDomain');
  });

  it("Can select a domain", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
  });

  it("Can add a new application to a Domain", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Applications').click({force: true});
    cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains('New Application').click();
    let app_name = "app" + getRandomInt(10000);
    cy.get('input[name="application-name"]').click().type(app_name);
    cy.get('*[class^="mat-checkbox-label"]').contains('Skip Authorization').click();
    cy.get('input[name="redirect-uri"]').type("http://localhost:"+getRandomInt(1000)+"/oauth-resp.html");
    cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').click();
  });


  it("Can prevent the wrong format of redirect url being saved", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Applications').click({force: true });
    cy.get('*[class^="mat-button-wrapper"]').contains('New Application').click();
    let app_name = "app" + getRandomInt(10000);
    cy.get('input[name="application-name"]').click().type(app_name);
    cy.get('input[name="redirect-uri"]').type("invalid");
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').click();
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').should('exist');
    cy.get('*[class^="mat-button-wrapper"]').contains('Cancel').click();
  });

  it("Can get the secret for an Application", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Applications').click({force: true });
    cy.get('*[class^="w-48 p-2 truncate underline text-center text-xs"]').contains('Show').click();
    // let clipboard = clipboardy.read();
    // clipboard.length.should('be.gte', 14);
  });

  it("Can edit the details of an Application", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Applications').click({force: true });
    cy.get('*[class^="backoffice-edit ng-star-inserted"]').first().click();
    let app_name = "app" + getRandomInt(10000);
    cy.get('input[name="application-name"]').click().clear().type(app_name);
    cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').click();
  });

  it("Can delete an application from a domain", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Applications').click({force: true });
    cy.get('*[class^="backoffice-trash ng-star-inserted"]').first().click();
    cy.get('*[class^="mat-button-wrapper"]').contains('Ok').click();
  });

  it("Can add a new Authentication source to the Domain", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().first().click({force: true});
    cy.get('*[class^="name"]').contains('Authentication ').click({force: true });
    cy.get('*[class^="mat-button-wrapper"]').contains('New Auth Source').click();
    cy.get('*[id^="mat-select-0"]').click();
    cy.get('*[class^="mat-option-text"]').contains('OAuth').click();
    let auth_name = "auth" + getRandomInt(1000);
    cy.get('input[name="auth-source-name"]').click().clear().type(auth_name);
    cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').click();
  });

  it("Can export a domain", () => {
    cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().last().click({force: true});
    cy.get('*[class^="heading select-text"]').then(($hd) => {
        let selected_domain = $hd.text()
        selected_domain = selected_domain.trim().replace(/ /g,"_").toLowerCase();
        cy.wait(1000);
        cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click({force: true});
        cy.contains('Export domain').click({force: true});
        cy.readFile(path.join(downloadsFolder, selected_domain + ".domains.tsv")).should("exist");
      })
  });
});
