
Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
describe('Custom commands', ()=>{
    it('login', ()=>{
        cy.loginPage('murugan@auxosolutions.io','Muru!@12345678')
       cy.title().should('contain','Applications')
                
      
    })
    
    it('user', ()=>{
    cy.practiceUrl()
    cy.name('Dhoni')
    cy.email('dhoni@gmail.com')
    cy.phone('76896908')
    cy.address('test')   
    
    })
    
    it('clear text & enter  welcome',()=>{
        cy.clearText('welcome')
        cy.clickButton()
       
    })
    it('clear text & enter  New user',()=>{
        cy.clearText('New user')
        cy.clickButton()
    })

    it('seach iphone',()=>{
        cy.flipkartSearch('iphone')
       cy.fsearchButton()
      
    })
    it('seach pc',()=>{
        cy.flipkartSearch('pc')
       cy.fsearchButton()
    })
   

})