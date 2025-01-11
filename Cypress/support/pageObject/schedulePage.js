class SchedulePage {
    fillScheduleDetails(description, itemnumber, insvalamount, sernum, sedescription) {
      cy.wait(5000);
      cy.get('#btnSelectScheduleSummary').click();
      cy.wait(6000);
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
        cy.get('#ui-select-choices-row-14-1 > .ui-select-choices-row-inner').click();
        cy.get('#covpropDedType2Article > .ui-select-match > .btn-default > .ui-select-match-text').click();
        cy.get('#ui-select-choices-row-15-1 > .ui-select-choices-row-inner').click();
        cy.get('#covpropOption2Article > .ui-select-match > .btn-default').click();
        cy.get('#ui-select-choices-row-16-3 > .ui-select-choices-row-inner').click();
        cy.get('#btnAddScheduleEquipment').click();
        cy.wait(500);

      cy.xpath("//button[@id='btnSave']").click();
      cy.xpath("//button[@id='btnNext']").click();
    }
  }
  
  export default new SchedulePage();
  