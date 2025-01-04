import 'cypress-xpath';
describe('Inland Marine', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=9041233&lob=Inland&bookLocId=2100&book=1100")
        cy.get('#username').type('murugan@auxosolutions.io') //username
        cy.get('#password').type('Muru!@12345678') //password
        cy.get("input[value='Login']").click() //login button
  
  
        cy.wait(10000);
        cy.xpath("(//span[normalize-space()='Schedule Summary'])[1]").click({ force: true });
        cy.wait(1000);
        cy.get('#btnSelectScheduleSummary').click();
        cy.wait(6000);
        cy.get('#location > .ui-select-match > .btn-default').click();
        cy.get('#ui-select-choices-row-12-0 > .ui-select-choices-row-inner').click();
        cy.get('#seItemValuation > .ui-select-match > .btn-default').click();
        cy.get('#ui-select-choices-row-13-0 > .ui-select-choices-row-inner').click();
        cy.get('#scheduleDescription').type('test');
        cy.get('#seItemNumber').type('1234');
        cy.get('#seInsuredValueAmount').type('100');
        cy.get('#seSerialNumber').type('1234');
        cy.get('#seDescription').type('test');
        cy.get('#addScheduleItem').click();
        cy.get('#form-group-covpropInclExclArticle > [role="radiogroup"] > :nth-child(2) > .control-label').click();
        cy.get('#covpropLimit1Article').type('100');
        cy.get('#covpropDed1Article').type('100');
        cy.get('#covpropDedType1Article > .ui-select-match > .btn-default > .ui-select-match-text').click();
        cy.get('#ui-select-choices-row-14-1 > .ui-select-choices-row-inner').click();
        cy.get('#covpropDedType2Article > .ui-select-match > .btn-default > .ui-select-match-text').click();
        cy.get('#ui-select-choices-row-15-1 > .ui-select-choices-row-inner').click();
        cy.get('#covpropOption2Article > .ui-select-match > .btn-default').click();
        cy.get('#ui-select-choices-row-16-3 > .ui-select-choices-row-inner').click();
        cy.get('#btnAddScheduleEquipment').click();
        cy.wait(500);
      cy.xpath("//button[@id='btnSave']").click();
      cy.xpath("//button[@id='btnNext']").click();


  
    })
})