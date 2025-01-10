// cypress/support/commands.js or cypress/support/e2e.js
import 'cypress-xpath';

describe('Day7hooks', ()=>{

    before('title check', ()=>{
     cy.visit("https://testautomationpractice.blogspot.com/")
     cy.title().then((title)=>{
         cy.log(title);
     })
 })
 after('code end time', ()=>{
     cy.log(new Date().toLocaleTimeString())
 })
 afterEach('screenshot',function(){
     cy.screenshot('test-screenshot',{capture: 'fullPage' });
    }) 

    beforeEach('clear text', ()=>{
     cy.visit("https://testautomationpractice.blogspot.com/")
     cy.xpath("//input[@id='field1']").clear()
 })
 it('enter text hook', ()=>{
     //cy.visit("https://testautomationpractice.blogspot.com/")
     cy.xpath("//input[@id='field1']").type('hook')
     cy.get("button[ondblclick='myFunction1()']").dblclick()

 })
 it('enter text HOOK', ()=>{
     //cy.visit("https://testautomationpractice.blogspot.com/")
     cy.xpath("//input[@id='field1']").type('HOOK')
     cy.get("button[ondblclick='myFunction1()']").dblclick()

 })
})