import 'cypress-xpath';
class SchedulePage {
    fillScheduleDetails(description, itemnumber, insvalamount, sernum, sedescription) {
      cy.wait(7000);
      // cy.get('.d-flex.column').should('not.exist');
      cy.xpath("(//button[@id='btnSelectScheduleSummary'])[1]").click( {force : true});
      cy.wait(8000);
      cy.get("div[id='location'] span[class='ui-select-placeholder text-muted ng-binding']").click();
      cy.wait(2000);
      cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click();
      cy.wait(2000);
      // cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
      // cy.get('#ui-select-choices-row-17-0 > .ui-select-choices-row-inner').click();
      // cy.wait(2000);
      cy.get('#seItemValuation > .ui-select-match > .btn-default').click();
      cy.get('#ui-select-choices-row-18-0 > .ui-select-choices-row-inner').click();
      cy.wait(2000);
      cy.get('#scheduleDescription').type(description);
      cy.get('#seItemNumber').type(itemnumber);
      cy.get('#seInsuredValueAmount').type(insvalamount);
      cy.get('#seSerialNumber').type(sernum);
      cy.get('#seDescription').type(sedescription);
      cy.get('#addScheduleItem').click();
    }
  
    addSchedule(limit, occurance) {
      
      cy.get('#form-group-covpropInclExclArticle > [role="radiogroup"] > :nth-child(2) > .control-label').click();
      cy.get('#covpropLimit1Article').type(limit);
      cy.get('#covpropDed1Article').type(occurance);
      cy.get('#covpropDedType1Article > .ui-select-match > .btn-default > .ui-select-match-text').click();
      cy.get('#ui-select-choices-row-19-1 > .ui-select-choices-row-inner').click();
        cy.get('#covpropDedType2Article > .ui-select-match > .btn-default > .ui-select-match-text').click();
        cy.get('#ui-select-choices-row-20-1 > .ui-select-choices-row-inner').click();
        cy.get('#covpropOption2Article > .ui-select-match > .btn-default').click();
        cy.get('#ui-select-choices-row-21-0 > .ui-select-choices-row-inner').click();
        cy.get('#btnAddScheduleEquipment').click();
        cy.wait(4000);

      cy.xpath("//button[@id='btnSave']").click();
      cy.wait(8000);
      cy.wait(1000);
      cy.screenshot("schedule page");
      cy.xpath("(//button[@id='btnNext'])[1]").click({ force: true });
    }
  }
  
  export default new SchedulePage();
  