class QuotingPage {
    fillMandatoryFields() {
      const mandatoryFields = ['#inInsured', '#inCity', '#inState', '#inZip', '#inCountry'];
      mandatoryFields.forEach(fieldId => {
        cy.get(fieldId, { timeout: 20000 }).should('have.attr', 'required');
        cy.get(fieldId).should('not.have.value', '');
      });
    }
  
    selectUnderwriter() {
      cy.get("div[id='poAssociate'] span[aria-label='Select box activate']").click();
      cy.get('#ui-select-choices-row-2-3 > .ui-select-choices-row-inner').click();
      cy.get("#poRenewalUnderwriter > .ui-select-match > .btn-default").click();
      cy.get('#ui-select-choices-row-5-2 > .ui-select-choices-row-inner').click();
    }
  
    enterPremium() {
      cy.xpath("(//input[@id='poMinimumEarnedPremiumDisplay'])[1]").clear({ force: true }).type('2');
    }
  
    selectAgency() {
      cy.get('#btnOpenAgencyGridModal').click();
      cy.wait(8000);
      cy.get('#dropSearchTextTypeAgency > .ui-select-match > .btn-default > .caret').click({ force: true });
      cy.get('#ui-select-choices-row-12-1 > .ui-select-choices-row-inner').click({ force: true });
      cy.get('#searchAgency').type('8');
      cy.get('#fgFilterBarBtnLeftBtnAgency').click({ force: true });
      cy.get('.jsgrid-row > .jsgrid-control-field > .pull-right').click();
      cy.get('#btnSearchAgency').click();
      cy.wait(5000);
      cy.get('.ag-row-first > .unq-dynamic-grid__checkbox-cell > .ag-react-container > .unq-dynamic-grid__checkbox > input').click();
      cy.get('#btnSelectAgency').click();
      cy.get('#btnNext').click();
    }
  }
  
  export default new QuotingPage();
  