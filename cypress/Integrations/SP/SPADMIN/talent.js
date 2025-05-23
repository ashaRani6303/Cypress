describe('Add talent case',function(){
it('Add talent', function()
{
    let data="";
    cy.fixture('example').then((fdata) => {
        data= fdata;
        
        cy.visit(data.adminurl);
        cy.adminLogin(data.adminusername, data.adminpassword);
        
  // load data from logo.png
})
})
})