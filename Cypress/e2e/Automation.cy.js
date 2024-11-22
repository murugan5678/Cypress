import 'cypress-xpath';
describe('Automation', ()=>{
    it('Click +positive', ()=>{
    cy.visit("http://www.flipkart.com")
    cy.get('.Pke_EE').click()
    })
    
    it('Search click +positive', ()=>{
            cy.visit("http://www.flipkart.com")
            cy.get('.Pke_EE').type('Iphone')
            cy.get('[type="submit"]').click()
            })
    
            it('Search click -negative', ()=>{
                cy.visit("http://www.flipkart.com")
                cy.get('[type="submit"]').click()
                })
    it('Clear +positive', ()=>{
                    cy.visit("http://www.flipkart.com")
                    cy.get('.Pke_EE').type('shoes')
                    cy.get('.Pke_EE').clear()
                    })  
    it('Login button -negative', ()=>{
    cy.visit("http://www.flipkart.com")
    cy.get('._1TOQfO > span').click()
    cy.contains('Request OTP').click()
     })                 
     it('Checkbox click +positive', ()=>{
        cy.visit("http://www.flipkart.com")
        cy.get('.Pke_EE').type('Iphone')
        cy.get('[type="submit"]').click()
        cy.get('[data-id="MOBGTAGPTB3VS24W"] > .tUxRFH > .CGtC98 > .Otbq5D > .qaR90o > .A8uQAd > .Lni97G > .tJjCVx > .XqNaEv').click()
       
        })
     
    
    })