import 'cypress-xpath';
class product{

    selectRange(){
        cy.xpath("(//select[@class='Gn+jFg'])[1]").select('₹15000').should('have.value', '15000');
        cy.wait(4000);
    }
  NavigateToAc(){
    
   cy.xpath("(//span[normalize-space()='TVs & Appliances'])[1]").trigger('mouseover');
   cy.wait(2000);
   cy.xpath("//a[@title='Window ACs']").click();
   cy.wait(2000);
   cy.xpath("(//div[@class='XqNaEv'])[4]").click();
  }

}

export default new product();