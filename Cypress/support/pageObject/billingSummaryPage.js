class billingSumPage {
    billingSum() {
        
        cy.wait(5000);
    
    cy.screenshot();
    cy.xpath("(//button[@id='btnNext'])[1]").click();
    }}
    export default new billingSumPage();