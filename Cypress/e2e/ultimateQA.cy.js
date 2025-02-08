import 'cypress-xpath';
describe('ultimate QA', ()=>{
    it('iltimate QA', ()=>{
    cy.visit("https://courses.ultimateqa.com/collections");
    cy.xpath("(//h3[contains(text(),'C# For QA Automation Engineers with Selenium Webdr')])[1]").click();
cy.xpath("(//a[normalize-space()='Get started now'])[1]").click();
cy.get('#account-info-email').type('murugan@qaoncloud.com');
cy.get('#input-2').type('Murugan');
cy.get('#input-3').type('Raman');
cy.get("label[for='terms-and-privacy-checkbox']").click();
cy.xpath("(//button[normalize-space()='Sign up'])[1]").click();
    })
})
