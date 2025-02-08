describe('AutomationTraining', ()=> {
    it('AutomationTraining', ()=> {
        cy.visit("http://www.flipkart.com")
        cy.get('.Pke_EE').type('Iphone')
        cy.get('[type="submit"]').click()
        cy.get('[title="Search for products, brands and more"]').clear()
        cy.contains('CATEGORIES').dblclick()
        cy.get('.WOvzF4').rightclick()
     
    
    
    })
    })