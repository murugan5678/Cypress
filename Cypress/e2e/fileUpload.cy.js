import 'cypress-xpath'
describe('file upload',() => {

    it('file upload', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
       const filePath = 'logo.png';
       cy.xpath("(//input[@id='singleFileInput'])[1]").attachFile(filePath);
        cy.xpath("(//button[normalize-space()='Upload Single File'])[1]").click();
       
    })
})
