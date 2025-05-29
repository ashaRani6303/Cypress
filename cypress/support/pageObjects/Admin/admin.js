class Admin {
    adminData = {}; // to access adminData inside a class method will use "this" keyword
    constructor() {
        // this.getAdminData();
        cy.fixture('admin').then((data) => {
            this.adminData = data;
        });
    }


    // getAdminData() {
    //     cy.fixture('admin').then((data) => {
    //         this.adminData = data;
    //     });
    // }

    adminLogin() {
        cy.visit(this.adminData.adminurl);
        cy.adminLogin(this.adminData.adminusername, this.adminData.adminpassword);
    }
    selectModule(moduleName, tabName) {
        cy.get('#quick-search-input').click().type(moduleName);
        cy.wait(8000);
        cy.get(".ah-quick-search-main-title").contains(tabName).click();
    }
}
export default new Admin();