///<reference types="cypress" />
import 'cypress-xpath';
describe('intercept', ()=>{
    it('interception1', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept({
            path : '/posts'
        }).as('posts')
        cy.xpath("//tbody/tr[1]/td[1]/a[1]").click();
        cy.wait('@posts').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })
    })
    
})