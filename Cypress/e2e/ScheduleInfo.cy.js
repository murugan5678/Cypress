import 'cypress-xpath';
describe('schedule Info', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting/#/display/application-details?contract=10217233&lob=Inland&bookLocId=2100&book=1100")
        cy.get('#username').type('murugan@auxosolutions.io') //username
        cy.get('#password').type('Muru!@12345678') //password
        cy.get("input[value='Login']").click() //login button

        cy.wait(20000);
        //click the schedule info side navigation
        cy.xpath("(//span[normalize-space()='Schedule Info'])[1]").click();
        cy.wait(6000);
        cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
        cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click();
        cy.xpath("(//span[normalize-space()='Add'])[1]").click();
        cy.wait(1000);
      cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
      cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click();
      cy.wait(2000);
      cy.get('#coverageEndorsementDesc1a8f476f6cadb4194a075e4729a956f95').type('test');
      cy.get('#coverageEndorsementDesc29442baad9ac34aa1bfc251a901116ed5').type('test');
      cy.xpath("(//input[@id='coverageEndorsementLevel8fe73969d0c640a9b53f7d6d47023097-L'])[1]").click();
      cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
      cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
      cy.xpath("(//select[@id='coverageEndorsementSubLocNum4048f3f26c794fdab70bc39bb9366885'])[1]").click();
      cy.xpath("(//button[@id='btnSave'])[1]").click();
    })
})