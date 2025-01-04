import 'cypress-xpath';
describe('Inland Marine', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=9041233&lob=Inland&bookLocId=2100&book=1100")
        cy.get('#username').type('murugan@auxosolutions.io') //username
        cy.get('#password').type('Muru!@12345678') //password
        cy.get("input[value='Login']").click() //login button

    cy.wait(10000);

    cy.xpath("(//span[normalize-space()='Quote Options'])[1]").click().wait(5000);

    cy.get('.unq-dynamic-grid__checkbox > input').click();
     cy.wait(5000);
    cy.get('#btnAcceptApp').click();
    cy.wait(25000);

    })
})