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
Cypress.Commands.add('adminLogin', (username, password) => { 
// cy.get("//input[@id='emp_id']").type(username);
// cy.get("//input[@id='password']").type(password);
// cy.get("//button[@id='login']").click();
cy.get('#username').type(username);
cy.get('#password').type(password);
cy.get(".ah-btn.ah-login-btn").click();
cy.get('#quick-search-input').click().type('Succession');
cy.wait(8000);
cy.get(".ah-quick-search-main-title").contains("Talent Hub").click(); 
//when there is text by using class name we can write like this
cy.get(".ah-btn.ah-btn-icon").contains("Add").click();  
cy.wait(4000)
cy.get(".form-control.ah-sm.ng-pristine.ng-invalid.is-error.ng-touched").type("cypress talent");
})

 