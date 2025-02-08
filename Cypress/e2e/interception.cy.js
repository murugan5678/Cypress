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

            cy.wait(5000);
        })

        
    })

    
    // it('Intercepts and Mocks a GET request', () => {
    //     cy.intercept('GET', '**/users', {
    //       statusCode: 200,
    //       body: [{ id: 1, name: 'John Doe', email: 'john@example.com' }]
    //     }).as('getUsers');
      
    //     cy.visit('https://jsonplaceholder.typicode.com/'); // Visit the page that makes API requests
      
    //     cy.wait('@getUsers', { timeout: 10000 }); // Wait for request (increase timeout)
        
    //     cy.get('@getUsers').then((interception) => {
    //       expect(interception.response.statusCode).to.eq(200);
    //       expect(interception.response.body[0].name).to.eq('John Doe');
    //     });
    //   });
})