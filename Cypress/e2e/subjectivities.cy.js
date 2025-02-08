import 'cypress-xpath';
describe('schedule Info', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting/#/display/application-details?contract=10217233&lob=Inland&bookLocId=2100&book=1100")
        cy.get('#username').type('murugan@auxosolutions.io') //username
        cy.get('#password').type('Muru!@12345678') //password
        cy.get("input[value='Login']").click() //login button

        cy.wait(15000);
        //click the schedule info side navigation
        cy.xpath("(//span[normalize-space()='Subjectivities'])[1]").click();
        cy.wait(6000);
        //click Add button
        cy.xpath("(//button[@id='btnAdd'])[1]").click();
        cy.wait(2000);
        //select the condition/waranty
         cy.xpath("(//input[@type='checkbox'])[9]").click();
         cy.wait(2000);
         //select the Remark
         cy.xpath("(//input[@type='checkbox'])[5]").click();
         cy.wait(2000);
         //select the subjectivity
         cy.xpath("(//input[@type='checkbox'])[24]").click();

         cy.wait(2000);
         cy.xpath("(//button[@id='btnAddCondition'])[1]").click();
         cy.wait(4000);
          cy.xpath("(//button[@id='btnSaveToC1'])[1]").click();
        
          cy.xpath("(//button[@id='btnNext'])[1]").click();
    })
})