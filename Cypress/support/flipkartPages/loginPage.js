import 'cypress-xpath';
class HomePage{

    url(url){
    cy.visit(url);
    }
   searchIphone(iphone){
    cy.xpath("(//input[@placeholder='Search for Products, Brands and More'])[1]").type(`${iphone}{enter}`);
    
   }
    
}

export default new HomePage ();
