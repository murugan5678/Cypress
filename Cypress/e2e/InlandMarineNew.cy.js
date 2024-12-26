import 'cypress-xpath';
describe('Inland Marine', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/suremga#/display/applications-dashboard")
        cy.get('#username').type('murugan@auxosolutions.io')
        cy.get('#password').type('Muru!@12345678')
        cy.get("input[value='Login']").click()
        //cy.get('body').type('{enter}');
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('cypress');
        })
        cy.get("button[aria-label='Hide Preview Bar']").click();
        //cy.get("#btnRefreshModalOK2").click();
        cy.wait(2000);
        cy.get("#btnRefreshModalOK2").click();
        cy.get("img[alt='Avatar']").trigger('mouseover');

        cy.wait(2000);
        cy.xpath("//span[normalize-space()='Change C1 User']").click({ force: true });
        cy.wait(2000);
        cy.get("div[id='bookSelected'] i[class='caret pull-right']").click({ force: true })
        cy.wait(2000);
        cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner > .ng-isolate-scope > .ng-binding').click({ force: true });
        cy.wait(2000);
        cy.get("#selectedC1User > .ui-select-match > .btn-default > .caret").click({ force: true });
        cy.wait(2000);
        cy.xpath("(//span[@class='ui-select-choices-row-inner'])[3]").click({ force: true });
        cy.wait(2000);
        cy.get('#btnCloseChangeC1User').click();
        cy.wait(2000);
        cy.get('#btnSearchDashboard').click({ force: true });
        cy.wait(5000);
        cy.get("input[placeholder='Search Type']").click({ force: true });
        cy.wait(1000);
        cy.xpath("div[id='ui-select-choices-row-0-1'] span[class='ui-select-choices-row-inner']").click({ force: true });
        cy.xpath("(//input[@id='searchDashboard'])[1]").type('APP12621233');
        cy.xpath("(//button[@id='fgFilterBarBtnLeftBtnDashboard'])[1]").click();
        cy.get('#btnSearchDashboard').click({ force: true });
        cy.wait(10000);

        cy.xpath("(//button[normalize-space()='APP12621233'])[1]").click({ force: true });
        cy.wait(10000);
        const mandatoryFields = ['#inInsured', '#inCity', '#inState', '#inZip', '#inCountry',];
        mandatoryFields.forEach(fieldId =>{
            cy.get(fieldId, { timeout: 20000 }).should('have.attr', 'required');
            cy.get(fieldId).should('not.have.value', '');
        });
        cy.get("div[id='poAssociate'] span[aria-label='Select box activate']").click({ force: true });
        cy.get("div[id='ui-select-choices-row-1-3'] span[class='ui-select-choices-row-inner']").click({ force: true });
        cy.get("#poRenewalUnderwriter > .ui-select-match > .btn-default").click({ force: true });
        cy.get("#ui-select-choices-row-4-2 > .ui-select-choices-row-inner").click({ force: true });
       cy.get("#poSicCode > .ui-select-match > .btn-default").click({ force: true });
       cy.wait(2000);
       cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click({ force: true });
      cy.get("#poMinimumEarnedPremiumDisplay").clear().type('2');
      cy.get("#btnOpenAgencyGridModal").click();

      cy.wait(10000);
      cy.get('#dropSearchTextTypeAgency > .ui-select-match > .btn-default > .caret').click({ force: true });
      cy.get('#ui-select-choices-row-11-1 > .ui-select-choices-row-inner').click({ force: true });
      cy.get('#searchAgency').type('8');
      cy.get('#fgFilterBarBtnLeftBtnAgency').click();
      cy.get('.jsgrid-row > .jsgrid-control-field > .pull-right').click();
      cy.get('#btnSearchAgency').click();
      cy.wait(10000);
      cy.get('.ag-row-first > .unq-dynamic-grid__checkbox-cell > .ag-react-container > .unq-dynamic-grid__checkbox > input').click();
      cy.get('#btnSelectAgency').click();
      cy.get('#btnNext').click();

      //Risk locations
      cy.wait(10000);
      cy.get('#btnOpenModal').click();
      cy.wait(1000);
      cy.get('.css-1g6gooi', { timeout: 15000 }).type('70').wait(5000).eq(0).click({ force: true });
    cy.wait(10000);
    const mandatoryField = ['#riCity', '#riState', '#riZip', '#riCounty', '#riCounty',];
    mandatoryField.forEach(fieldId =>{
        cy.get(fieldId, { timeout: 20000 }).should('have.attr', 'required');
        cy.get(fieldId).should('not.have.value', '');
    });
      //cy.get('.pac-container .pac-item').eq(3).click();
      cy.xpath("(//button[@id='btnAddLocation'])[1]").click({ force: true });
      cy.wait(20000);
      cy.xpath("(//button[@id='btnNext'])[1]").click();


     //Agreements
     //Agency Commission field
     cy.get("#newRate").type('10')
     //Select Agreements
     cy.get('.unq-dynamic-grid__checkbox > input').click();
     cy.wait(10000);

    });



    })
