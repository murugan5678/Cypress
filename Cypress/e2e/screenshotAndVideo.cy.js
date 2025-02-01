import 'cypress-xpath';
describe('screenshot', ()=>{
    it('screenshot and video', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/p/download-files_25.html');
        cy.screenshot("Automation pahe");
        cy.wait(1000);
        cy.get('.titlewrapper').screenshot('title');
    })
    it('screenshot and video', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.xpath("//input[@id='name']").type('test');
        cy.xpath("(//a[normalize-space()='GUI Elements'])[1]").should('have.text', 'GUI Elem')
    })
})