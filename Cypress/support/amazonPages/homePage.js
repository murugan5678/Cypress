class HomePage{

    searchProduct(AC){
        cy.xpath("(//input[@id='twotabsearchtextbox'])[1]").type(AC);
        cy.xpath("(//input[@id='nav-search-submit-button'])[1]").click();
    }
    selectBrand(){
        cy.wait(2000)
        cy.xpath("(//i[@class='a-icon a-icon-checkbox'])[15]");
    }
    addCart(){
        cy.wait(2000)
       cy.xpath("(//button[@id='a-autoid-1-announce'])[1]").click();

    }
    cartPage(){
        cy.wait(500)
        cy.get('.a-spacing-base > .a-button > .a-button-inner > .a-button-text').click();
    }
}
export default new HomePage();