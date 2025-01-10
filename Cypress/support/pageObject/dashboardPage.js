class DashboardPage {
    changeC1User() {
      cy.wait(1000);
      cy.xpath("//span[normalize-space()='Change C1 User']").click({ force: true });
      cy.get("div[id='bookSelected'] i[class='caret pull-right']").click({ force: true });
      cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner > .ng-isolate-scope > .ng-binding').click({ force: true });
      cy.wait(1000);
      cy.get("#selectedC1User > .ui-select-match > .btn-default > .caret").click({ force: true });
      cy.xpath("(//span[@class='ui-select-choices-row-inner'])[8]").click({ force: true });
      cy.wait(4000);
      cy.xpath("(//button[@id='btnCloseChangeC1User'])[1]").click();
      cy.wait(4000);
      cy.get('#btnSearchDashboard').click({ force: true });
      cy.wait(5000);
    }
   
    searchApplication(applicationid) {
      cy.wait(4000);
      cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click({ force: true });
      cy.xpath("(//span[@class='ui-select-choices-row-inner'])[2]").click({ force: true });
      
  
      cy.xpath("(//input[@id='searchDashboard'])[1]").should('be.visible').type(applicationid);

      cy.xpath("(//button[@id='fgFilterBarBtnLeftBtnDashboard'])[1]").click();
      cy.get('#btnSearchDashboard').click();
      cy.wait(5000);
    }
  }
  
  export default new DashboardPage();
  