import Talenthub from '../../../support/pageObjects/Admin/SP/talenthub';
import Admin from '../../../support/pageObjects/Admin/admin';
describe('Add talent case', function () {
  BeforeEach(function () {

  })
  it('Add talent Success Case', function () {
    let data = "";
    cy.fixture('example').then((fdata) => {
      data = fdata;
      adminLogin(data);
      selectModule("Succession", "Talent Hub");
      // addTalent("Cypress test talent", "test008");
      searchAndVerifyTalent("Cypress test talent");
      verifyTalentDetails({ talentName: "Cypress test talent", talentOwner: "Rohit" });
      updateTalent();
    })
  })
})
