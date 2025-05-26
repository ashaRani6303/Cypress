describe('Add talent case', function () {
  it('Add talent', function () {
    let data = "";
    cy.fixture('example').then((fdata) => {
      data = fdata;

      cy.visit(data.adminurl);
      cy.adminLogin(data.adminusername, data.adminpassword);
      cy.get('#quick-search-input').click().type('Succession');
      cy.wait(8000);
      cy.get(".ah-quick-search-main-title").contains("Talent Hub").click();
      //when there is text by using class name we can write like this
      /*cy.get(".ah-btn.ah-btn-icon").contains("Add").click();
      cy.wait(4000);
      cy.get("[formcontrolname='name']").type('Cypress test talent').should('have.value', 'Cypress test talent').click(); //this is attribute selector
      cy.get(".ah-unselect-text").click();
      cy.wait(4000);
      cy.get('.ah-emp-search > .input-group > .form-control').type("TEST008{enter}").should('have.value', 'TEST008');
      //replace with "." when there is space in classname and write enter when we need to enter any data
      cy.get(".ah-employee-col-meta.meta-data-set").click();
      cy.get('#request-cancel-modify').contains('Submit').click();
      cy.get("#confirmNew").then(($el) => {
        const display = $el.css('display');
        if (display === 'block') {
          cy.log("Modal is opened");
        } else {
          cy.log("Modal is closed and done");
        }
      })
      cy.get("#request-cancel").contains('Confirm').click(); 
    
      cy.contains('Talent has been added successfully!').should('be.visible');
      cy.get("#request-submit-close").click(); */
      cy.get("#column-search-input").type('Cypress test talent{enter}').click();
      cy.get("#checkinduration").click();

    })
  })
})