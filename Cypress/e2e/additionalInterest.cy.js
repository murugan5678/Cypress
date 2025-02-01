import 'cypress-xpath';
describe('add Int', ()=>{
    it('additional Interest',()=>{
        cy.viewport(1700, 1000);
    cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=9041233&lob=Inland&bookLocId=2100&book=1100")
    cy.get('#username').type('murugan@auxosolutions.io') //username
    cy.get('#password').type('Muru!@12345678') //password
    cy.get("input[value='Login']").click() //login button


    cy.wait(11000);
    cy.xpath("(//span[normalize-space()='Additional Interests'])[1]").click();
    cy.wait(10000);
    cy.xpath("(//button[@id='btnAdd'])[1]").click();
    cy.wait(5000);
    // cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'][normalize-space()='Search Type'])[1]").click();
    // cy.xpath("(//span[contains(text(),'Phone Number')])[1]").click();
    // cy.xpath("(//input[@id='searchAdditionalInterests'])[1]").type('8');
    // cy.xpath("(//button[@id='fgFilterBarBtnLeftBtnAdditionalInterests'])[1]").click();
    // cy.xpath("(//button[@id='btnSearchAdditionalInterests'])[1]").click();
    // cy.wait(5000);
    cy.xpath("(//span[normalize-space()='Add New'])[1]").click();
    cy.wait(1000);
    cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
    cy.xpath("(//span[@class='ng-binding ng-scope'][normalize-space()='A3 - Additional Insured - Owners, Lessees Or Contractors (Form B)'])[1]").click();
    cy.xpath("(//input[@id='name'])[1]").type('name');
    cy.xpath("(//span[@aria-label='Select box activate'])[4]").click();
    cy.xpath("(//span[@class='ng-binding ng-scope'][normalize-space()='(no description) - FORM'])[3]").click();
    cy.xpath("(//button[@id='btnAddInterest'])[1]").click();
    cy.xpath("(//button[@id='btnSave'])[1]").click();
    cy.wait(7000);
    cy.xpath("(//button[@id='btnNext'])[1]").click

    })
})