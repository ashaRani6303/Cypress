class Talenthub {
    addTalent(talentName, employeeId) {
        //when there is text by using class name we can write like this
        cy.get(".ah-btn.ah-btn-icon").contains("Add").click();
        cy.wait(4000);
        cy.get("[formcontrolname='name']").type(talentName).should('have.value', talentName).click(); //this is attribute selector
        cy.get(".ah-unselect-text").click();
        cy.wait(4000);
        cy.get('.ah-emp-search > .input-group > .form-control').type(`${employeeId}{enter}`).should('have.value', employeeId);
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
        cy.get("#request-submit-close").click();
    }
    searchAndVerifyTalent(talentName) {
        cy.get("#column-search-input").type(`${talentName}{enter}`).click();
        cy.wait(8000);
        cy.log(cy.get("#checkinduration"))
        cy.get('tbody > tr > :nth-child(1)').contains(talentName).parent('tr').within(() => {
            cy.get('#checkinduration').contains('Actions').click();
        });
    }
    verifyTalentDetails(talentDetails) {
        cy.get("[name='view']").click();
        cy.wait(4000);
        cy.log(talentDetails);
        cy.get(':nth-child(1) > .ah-content-item > .val-text').contains(talentDetails.talentName).should('be.visible');
        cy.get(':nth-child(2) > .ah-content-item > .val-text').contains(talentDetails.talentOwner).should('be.visible');
        cy.get('#viewOverlay > .ah-overlay-view > .ah-overlay-view-left > .ah-overlay-view-header > .close-action > .fal').click();
        //cy.get('.ah-employee-col-meta.meta-data-set').should('be.visible');
    }

    updateTalent() {
        cy.get("[name='update']").click();
        cy.wait(4000);
        cy.get("[formcontrolname='name']").type("Updated").should('have.value', "Test cyp talent Updated");
    }
    deactivateTalent() {
        cy.get("[name='deactivate']").click();
        cy.wait(4000);
        cy.get("#request-cancel").contains('Confirm').click();
        cy.contains('Talent has been deactivated successfully!').should('be.visible');
        cy.get("#request-submit-close").click();
    }

}

export default new Talenthub();