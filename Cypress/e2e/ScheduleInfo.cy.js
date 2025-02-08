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
        cy.xpath("(//span[normalize-space()='Schedule Info'])[1]").click();
        cy.wait(6000);
      //   cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
      //   cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click();
      //   cy.xpath("(//span[normalize-space()='Add'])[1]").click();
      //   cy.wait(1000);
      // cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
      // cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click();
      // cy.wait(2000);
    
      // // cy.xpath("(//textarea[@id='coverageEndorsementDesc1a809717c88044c1c93f69e0789bffd57'])[1]").type('test', { force: true });
      // // cy.xpath("(//textarea[@id='coverageEndorsementDesc2f7b0645035c14c0cba86c8803d265d67'])[1]").type('test', { force: true });
      // cy.xpath("(//input[@id='coverageEndorsementLevel1235e63767ff453081f7a45b886551d0-L'])[1]").click({ force: true });
      // cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click({ force: true });
      // cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click({ force: true });
      // cy.xpath("(//select[@id='coverageEndorsementSubLocNumf77f3b41349a4b47b5af07dbc8881011'])[1]").click({ force: true });
      // // cy.xpath("(//button[@id='btnSave'])[1]").click();
      // // cy.wait(5000);
      // cy.xpath("(//span[@class='ng-binding ng-scope'][normalize-space()='Coverage Endorsement'])[1]").click();
      // cy.xpath("(//input[@placeholder='Schedule Type...'])[1]").click();
      // cy.xpath("(//span[@class='ui-select-choices-row-inner'])[2]").click();
      // cy.xpath("(//span[normalize-space()='Add'])[1]").click();
      // cy.get('#ui-select-choices-row-12-1 > .ui-select-choices-row-inner').click();
      // cy.xpath("(//input[@id='manuscriptedEndorsementCheckbox15a57337d4b764586a3a94a26a8c2ae59'])[1]").click();
      // cy.xpath("(//textarea[@id='manuscriptedEndorsementOthChgbedd04559a6e4f01b2ac86c47c1f25e3'])[1]").type('test');
      // cy.xpath("(//textarea[@id='manuscriptedEndorsementOth1Chgd026ed8570aa4952aa2e704004acef45'])[1]").type('test');
      // cy.xpath("(//button[@id='btnSave'])[1]").click();

      cy.title().should('be.equal','Schedule Information - RSUM qa-uat');
     cy.wait(1000);
     //Add Schedule
     cy.get('#scheduleTypeSelect > div.ui-select-match.ng-scope > span > i').click({force: true});
     cy.wait(1000);
     //Manuscript Endorsement forms
     cy.get('#ui-select-choices-row-12-1 > .ui-select-choices-row-inner').click({force: true});
     cy.wait(1000);
     cy.get('#scheduleInformationAdd').click({force: true});
     cy.wait(1000);
     //Report Frequency schedule
     cy.get('#scheduleTypeSelect > div.ui-select-match.ng-scope > span > i').click({force: true});
     cy.get('#ui-select-choices-row-12-2 > .ui-select-choices-row-inner').click({force: true});
     cy.wait(2000);
     cy.get('#scheduleInformationAdd').click({force: true});
     //Entertainment
     cy.get('#scheduleTypeSelect > div.ui-select-match.ng-scope > span > i').click({force: true});
     cy.get('#ui-select-choices-row-12-4 > .ui-select-choices-row-inner').click({force: true});
     cy.wait(1000);
     cy.get('#scheduleInformationAdd').click({force: true});
     cy.wait(2000);
     //General Liability
     cy.get('#scheduleTypeSelect > div.ui-select-match.ng-scope > span > i').click({force: true});
     cy.get('#ui-select-choices-row-12-5 > .ui-select-choices-row-inner').click({force: true});
     cy.wait(1000);
     cy.get('#scheduleInformationAdd').click({force: true});
     cy.wait(2000);
    
     //Input values
     cy.get('#form-group-panelAllManuscriptedEndorsement > :nth-child(1) > :nth-child(1)')
     cy.wait(1000);
     
     cy.get('#btnSave > .button-label').click({force: true});
     cy.wait(5000);
     cy.get('#btnNext > span').click({force: true});
    cy.wait(5000);
    })
})