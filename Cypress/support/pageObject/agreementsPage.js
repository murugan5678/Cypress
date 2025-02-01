class agreementsPage {
    agencyCommision(agencyvalue) {
        cy.wait(5000);
        cy.get("#newRate").clear().type(agencyvalue);
    }

    agreementsSelect(){
     cy.get('.unq-dynamic-grid__checkbox > input').click();  
     cy.xpath("(//input[@id='disableUnselectedToggle'])[1]").click().wait(10000).click();
     cy.get('.unq-dynamic-grid__checkbox > input').click();
     cy.wait(1000);
      cy.screenshot("agreements");
     cy.xpath("(//button[@id='btnNext'])[1]").click();
    }
}
export default new agreementsPage();