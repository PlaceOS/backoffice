function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe("Domain test", () => {
  it("Can log in", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('input[name="email"]').type("support@place.tech");
    cy.get('input[name="password"]').type("development");

    cy.get("form").submit();
  });


  it("Can create a domain", () => {
    cy.get('*[class^="backoffice-browser ng-star-inserted"]').click();
    cy.wait(1000);
     cy.get('*[class^="mat-focus-indicator mat-tooltip-trigger add mat-icon-button mat-button-base ng-star-inserted"]').click();
     cy.wait(1000);
     let domain_name = "domain7"+getRandomInt(100);
     cy.get('input[name="domain-name"]').type(domain_name);
     cy.get('input[name="domain"]').type("localhost"+getRandomInt(100))
     cy.contains('Save').click()
     cy.get('*[class^="cdk-virtual-scroll-viewport cdk-virtual-scroll-orientation-vertical"]').contains(domain_name);
  });

  it("Can supply new domain settings", () => {
    cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('{backspace}').type('"bool_setting" : true}', { parseSpecialCharSequences: false });
  });

  it("Can flag incorrect domain settings", () => {
    cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('{backspace}')
    cy.wait(1000);
    cy.get('*[class^="ng-untouched ng-star-inserted ng-dirty ng-invalid"]').should('exist')
    cy.get('*[class^="view-lines monaco-mouse-cursor-text"]').click().type('}',{ parseSpecialCharSequences: false });
  });

  it("Can filter the domains", () => {
    cy.get('*[class^="search"]').type("domain");
    cy.wait(1000);
    cy.get('*[class^="search"]').type("6");
    //cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().should('have.length', 4)
    cy.get('*[class^="search"]').clear();
  });

  it("Can edit a domain", () => {
    // cy.wait(1000);
    cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click({waitForAnimations:true});
    // cy.wait(1000);
    cy.contains('Edit domain').click({force: true, waitForAnimations:true});
    // cy.wait(1000);
    cy.get('input[name="domain-name"]').clear().type("newDomain");
    cy.contains('Save').click()
    cy.get('*[class^="heading select-text"]').contains('newDomain');
  });

  it("Can delete a domain", () => {
    cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click({waitForAnimations:true});
    cy.wait(1000);
    cy.contains('Delete domain').click({waitForAnimations:true});
    cy.wait(1000);
    cy.contains('Ok').click({waitForAnimations:true})
    // cy.get('*[class^="cdk-virtual-scroll-content-wrapper"]').children().filter('.users').should('have.length', 2)
  });

  it("Can select a domain", () => {
    cy.wait(1000);
    cy.get('*[class^="item"]').first().click();
  });

  it("Can add a new application to a Domain", () => {
    cy.get('*[class^="name"]').contains('Applications').click({force: true, waitForAnimations:true});

    cy.get('*[class^="mat-button-wrapper"]').contains('New Application').click({waitForAnimations:true});
    let app_name = "app"+getRandomInt(10000);
    cy.get('input[name="application-name"]').click({waitForAnimations:true}).type(app_name);
    cy.get('*[class^="mat-checkbox-label"]').contains('Skip Authorization').click({waitForAnimations:true});
    cy.get('input[name="redirect-uri"]').type("http://localhost:"+getRandomInt(1000)+"/oauth-resp.html");
    cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').click({waitForAnimations:true});
    // cy.reload();
  });


  it("prevents the wrong format of redirect url being saved", () => {
    cy.get('*[class^="name"]').contains('Applications').click({force: true, waitForAnimations:true});
    cy.get('*[class^="mat-button-wrapper"]').contains('New Application').click({waitForAnimations:true});
    cy.get('input[name="redirect-uri"]').type("invalid");
    cy.get('input[name="application-name"]').click({waitForAnimations:true})
    cy.wait(1000);
    cy.get('*[class^="mat-form-field-subscript-wrapper ng-tns-c88-23"]').contains("A valid URL is required");
    cy.get('*[class^="mat-button-wrapper"]').contains('Cancel').click({waitForAnimations:true});
  });

  it("Can get the secret for an Application", () => {
    cy.get('*[class^="w-48 p-2 truncate underline text-center text-xs"]').contains('Show').click({waitForAnimations:true});
    // cy.window().its('navigator.clipboard')
    // .invoke('readText')
    // .should('equal', 'x')
    //cy.reload();
  });

  it("Can edit the details of an Application", () => {
    cy.get('*[class^="backoffice-edit ng-star-inserted"]').first().click();
    let app_name = "app"+getRandomInt(10000);
    cy.get('input[name="application-name"]').click({waitForAnimations:true}).clear().type(app_name);
    cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').click({waitForAnimations:true});

  });

  it("Can delete an application from a domain", () => {
    cy.get('*[class^="backoffice-trash ng-star-inserted"]').first().click();
    cy.get('*[class^="mat-button-wrapper"]').contains('Ok').click({waitForAnimations:true});
  });

  it("Can add a new Authentication source to the Domain", () => {
    cy.get('*[class^="name"]').contains('Authentication ').click({force: true, waitForAnimations:true});
    cy.get('*[class^="mat-button-wrapper"]').contains('New Auth Source').click({waitForAnimations:true});
    cy.get('*[id^="mat-select-0"]').click({waitForAnimations:true});
    cy.get('*[class^="mat-option-text"]').contains('OAuth').click({waitForAnimations:true});
    let auth_name = "auth"+getRandomInt(1000);
    cy.get('input[name="auth-source-name"]').click({waitForAnimations:true}).clear().type(auth_name);
    cy.wait(1000);
    cy.get('*[class^="mat-button-wrapper"]').contains('Save').click({waitForAnimations:true});
  });


  it("Can export a domain", () => {
    cy.get('*[class^="backoffice-dots-three-vertical ng-star-inserted"]').click({waitForAnimations:true});
    cy.wait(1000);
    cy.contains('Export domain').click({waitForAnimations:true});
    //cy.readFile("domain6.domains.tsv")
  });
});
