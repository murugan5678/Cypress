import'cypress-xpath';
describe('billing sumary', ()=>{
    it('Billing summmary', ()=>{
        cy.viewport(1700, 1000);
    cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=9041233&lob=Inland&bookLocId=2100&book=1100")
    cy.get('#username').type('murugan@auxosolutions.io') //username
    cy.get('#password').type('Muru!@12345678') //password
    cy.get("input[value='Login']").click() //login button


    cy.wait(10000);
    cy.xpath("(//span[normalize-space()='Summary'])[1]").click();
    cy.wait(2000);
    cy.xpath("(//span[@class='component-readyonly-content'][normalize-space()='399.69'])[2]")
    .invoke('text')
    .then((currentText) => {
        cy.log('Current value:', currentText);
        expect(currentText).to.not.be.empty;
    })
    cy.screenshot();
    cy.xpath("(//button[@id='btnNext'])[1]").click();
    })
})