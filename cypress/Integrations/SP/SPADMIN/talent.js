import Talenthub from '../../../support/pageObjects/Admin/SP/talenthub';
import Admin from '../../../support/pageObjects/Admin/admin';
describe('Add talent case', function () {
  BeforeEach(function () {
    Admin.adminLogin();
    cy.wait(5000);
    Admin.selectModule("Succession", "Talent Hub");
  })
  it('Add talent Success Case', function () {
    Talenthub.addTalent
  })
})
