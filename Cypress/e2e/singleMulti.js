import 'cypress-xpath';
describe('Day2Automation', ()=>{
    //dropdown single select positive
    it('Dropdown single +tive', ()=>{
        cy.visit("http://www.flipkart.com")
       cy.get('.Pke_EE').type('Iphone')
       cy.get('._2iLD__').click()
        cy.xpath('(//select[@class="Gn+jFg"])[1]').select('₹15000')
    })
 
   //dropdown multiple select positive
    it('Dropdown Multiselect', ()=>{
        cy.visit("https://www.leafground.com/select.xhtml")
        cy.xpath('//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"]').click()
    })

    //radio buttons
    it('Radio button +tive', ()=>{
        cy.visit("https://ecommerce-playground.lambdatest.io/")     
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.xpath('(//a[@class="list-group-item"])[1]').click()
       cy.xpath('//label[@for="input-newsletter-yes"]').click()
    })
// radio button negative 
it('Radio button -tive', ()=>{
    cy.visit("https://ecommerce-playground.lambdatest.io/")     
        cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click()
        cy.xpath('(//a[@class="list-group-item"])[1]').click()
       cy.xpath('//label[@for="input-newsletter-yes"]').should('not.be.checked')

})


//checbox single
it('single checkbox', ()=>{
    cy.visit("http://www.automationpractice.pl/index.php")
    cy.xpath('(//a[@title="T-shirts"])[2]').click()
    cy.get('#layered_id_attribute_group_2').check()
    
})
//multiple check box
it('multiple checkbox', ()=>{
    cy.visit("http://www.automationpractice.pl/index.php?id_category=8&controller=category#")     
    cy.get('span input').check(['9', '10'])
})
it('dropdown without select', ()=>{
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    
    cy.get("#select2-billing_country-container").click()
    cy.get("input.select2-search__field").type('India').type('{enter}')
    
    })
    
    it('dropdown without select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        
        cy.get("#select2-billing_country-container").click()
        cy.get("input.select2-search__field").type('India').type('{enter}')
        
        })

})
