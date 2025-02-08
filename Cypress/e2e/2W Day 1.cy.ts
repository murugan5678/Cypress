// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
//import cypress from "cypress"
describe('Assertion', function(){
it('text box', function() {
    cy.visit('https://www.leafground.com/input.xhtml;jsessionid=node01wlh2x5gc5vzfqsc6xh49ibue696616.node0')
    cy.get("body > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input:nth-child(1)").type('Automation')
})
it('text box', function(){
    cy.visit('https://www.flipkart.com/')

cy.get("input[placeholder='Search for Products, Brands and More']").type('Iphone')

})
//using should contain
it('assertion with contain', function(){
    cy.visit('https://www.leafground.com/input.xhtml;jsessionid=node01wlh2x5gc5vzfqsc6xh49ibue696616.node0')
    cy.get("button[aria-label='Show Calendar'] span[class='ui-button-text']").should('contain', 'ui-button')
})
//using should have
it('assertion with have', function(){
    cy.visit('https://www.flipkart.com/')
    cy.get("img[alt='Cart']").should('have.class', '_1XmrCc')
})

//using should be visible
it('assertion with should be visible', function(){
    cy.visit('https://www.flipkart.com/')
    cy.get("img[alt='Cart']").should('be.visible')
})
//using should be not visible -negative
// it('assertion with should be not visible negative ', function(){
//     cy.visit('https://www.flipkart.com/')
//     cy.get("img[alt='Cart']", { timeout: 10000 })
//     .should('not.be.visible')
// })
//using should equal
it('assertion with should equal', function(){
    cy.visit('https://www.leafground.com/input.xhtml;jsessionid=node01wlh2x5gc5vzfqsc6xh49ibue696616.node0')
    cy.get("button[aria-label='Show Calendar']").should('contain', 'ui-button').and('have.class', 'ui-datepicker-trigger ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only')
    
})



})