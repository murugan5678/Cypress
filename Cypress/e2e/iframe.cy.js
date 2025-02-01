Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
import 'cypress-xpath';
describe('iframe', ()=>{
    // it('iframe', ()=>{
    //     cy.visit("https://demo.automationtesting.in/Frames.html");
    //         const iframe=cy.xpath("(//iframe[@id='singleframe'])[1]")
    //                   .its('0.contentDocument.body')
    //                   .should('be.visible')
    //                   .then(cy.wrap)
    //                   iframe.type("cypress");
    // })
    it('iframe', ()=>{
        cy.visit("https://demoqa.com/frames");
            const iframe=cy.xpath("//iframe[@id='frame1']")
                      .its('0.contentDocument.body')
                      .should('be.visible')
                      .then(cy.wrap)
                      .find("(//h1[normalize-space()='This is a sample page'])[1]")
                      .invoke('text')
                      .then((text) =>{
                        expected(text).to.contain("This is a sample page");
                      })
    })
})