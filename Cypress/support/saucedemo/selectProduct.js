
class SelectProduct{
    selectProduct(firstname, lastname, postalcode){
        cy.wait(500);
        
        //cy.realPress('{enter}');
        cy.xpath("(//select[@class='product_sort_container'])[1]").select('Price (high to low)');
    cy.xpath("(//button[@id='add-to-cart-sauce-labs-bolt-t-shirt'])[1]").click();
    cy.wait(500);
    cy.xpath("(//a[@class='shopping_cart_link'])[1]").click();
    cy.wait(500);
    cy.get('.inventory_item_price')  
  .invoke('text')               
  .then((price) => {
    cy.log('Item Price:', price);  
  });
    
  cy.xpath("(//button[normalize-space()='Checkout'])[1]").click();
  cy.get('#first-name').type(firstname);
  cy.get('#last-name').type(lastname);
  cy.get('#postal-code').type(postalcode);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
    }
}

export default new SelectProduct();