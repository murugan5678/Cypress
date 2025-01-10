class SchedulePage {
    fillScheduleDetails(description, itemnumber, insvalamount, sernum, sedescription) {
      cy.wait(5000);
      cy.get('#btnSelectScheduleSummary').click();
      cy.wait(6000);
      cy.get("div[id='location'] span[class='ui-select-placeholder text-muted ng-binding']").click();
      cy.wait(2000);
      cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click();
      cy.get('#ui-select-choices-row-18-2 > .ui-select-choices-row-inner').click();
      cy.wait(2000);
      cy.get('#ui-select-choices-row-18-0 > .ui-select-choices-row-inner').click
      cy.wait(2000);
      cy.get('#scheduleDescription').type(description);
      cy.get('#seItemNumber').type(itemnumber);
      cy.get('#seInsuredValueAmount').type(insvalamount);
      cy.get('#seSerialNumber').type(sernum);
      cy.get('#seDescription').type(sedescription);
      cy.get('#addScheduleItem').click();
    }
  
    addSchedule() {
      
      cy.get('#form-group-covpropInclExclArticle > [role="radiogroup"] > :nth-child(2) > .control-label').click();
      cy.get('#covpropLimit1Article').type('100');
      cy.get('#covpropDed1Article').type('100');
    }
  }
  
  export default new SchedulePage();
  