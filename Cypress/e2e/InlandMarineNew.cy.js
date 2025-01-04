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

        cy.wait(1000);
        cy.xpath("//span[normalize-space()='Change C1 User']").click({ force: true });
        cy.wait(1000);
        cy.get("div[id='bookSelected'] i[class='caret pull-right']").click({ force: true })
        cy.wait(1000);
        cy.get('#ui-select-choices-row-1-0 > .ui-select-choices-row-inner > .ng-isolate-scope > .ng-binding').click({ force: true });
        cy.wait(1000);
        cy.get("#selectedC1User > .ui-select-match > .btn-default > .caret").click({ force: true });
        cy.wait(1000);
        cy.xpath("(//span[@class='ui-select-choices-row-inner'])[3]").click({ force: true });
        cy.wait(1000);
        cy.get('#btnCloseChangeC1User').click();
        cy.wait(1000);
        cy.get('#btnSearchDashboard').click({ force: true });
        cy.wait(5000);
        cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click({ force: true });
        cy.wait(1000);
        cy.xpath("(//span[@class='ui-select-choices-row-inner'])[2]").click({ force: true });
        cy.xpath("(//input[@id='searchDashboard'])[1]").type('APP12621233');
        cy.xpath("(//button[@id='fgFilterBarBtnLeftBtnDashboard'])[1]").click();
        cy.get('#btnSearchDashboard').click({ force: true });
        cy.wait(2000);

        cy.xpath("(//button[normalize-space()='APP12621233'])[1]").click({ force: true });
        //cy.get('.unq-dynamic-grid__editable-cell > .ag-react-container > .unq-dynamic-grid__cell-value').click();
        //cy.xpath("(//button[normalize-space()='Original Application'])[1]").click();
        
        cy.wait(1000);
          cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=8971233&lob=Inland&bookLocId=2100&book=1100");
            
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
        cy.xpath("(//span[@class='ui-select-match-text pull-left'])[7]").click();
        cy.xpath("(//span[@class='ui-select-choices-row-inner'])[4]").click();
       cy.get("#poSicCode > .ui-select-match > .btn-default").click({ force: true });
       
       cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click({ force: true });
       cy.wait(2000);
      cy.xpath("(//input[@id='poMinimumEarnedPremiumDisplay'])[1]").clear({ force: true }).type('2').log("2 has entered");
      cy.get("#btnOpenAgencyGridModal").click({ force: true });

      cy.wait(6000);
      cy.get('#dropSearchTextTypeAgency > .ui-select-match > .btn-default > .caret').click({ force: true });
      cy.get('#ui-select-choices-row-11-1 > .ui-select-choices-row-inner').click({ force: true });
      cy.get('#searchAgency').type('8');
      cy.get('#fgFilterBarBtnLeftBtnAgency').click({ force: true });
      cy.get('.jsgrid-row > .jsgrid-control-field > .pull-right').click();
      cy.get('#btnSearchAgency').click();
      cy.wait(60000);
      cy.get('.ag-row-first > .unq-dynamic-grid__checkbox-cell > .ag-react-container > .unq-dynamic-grid__checkbox > input').click();
cy.wait(1000);
      cy.get('#btnSelectAgency').click();
      cy.get('#btnNext').click();

      //Risk locations
      cy.wait(5000);
      cy.get('#btnOpenModal').click();
      cy.wait(1000);
      cy.get('.css-1g6gooi', { timeout: 1000 }).type('70').wait(1000).eq(0).click({ force: true });
    cy.wait(1000);
    // const mandatoryField = ['#riCity', '#riState', '#riZip', '#riCounty', '#riCounty',];
    // mandatoryField.forEach(fieldIds =>{
    //     cy.get(fieldIds, { timeout: 20000 }).should('have.attr', 'required');
    //     cy.get(fieldIds).should('not.have.value', '');
    // });
      //cy.get('.pac-container .pac-item').eq(3).click();
      cy.xpath("(//button[@id='btnAddLocation'])[1]").click({ force: true });
      cy.wait(1000);
      cy.xpath("(//button[@id='btnNext'])[1]").click();


     //Agreements
     //Agency Commission field
     cy.wait(5000);
     cy.get("#newRate").clear().type('10')
     //Select Agreements
     cy.wait(1000);
     cy.get('.unq-dynamic-grid__checkbox > input').click();
     
     cy.xpath("(//input[@id='disableUnselectedToggle'])[1]").click().wait(10000).click();
     cy.get('.unq-dynamic-grid__checkbox > input').click();

    //  .should('be.visible')
    //  .then(($checkbox) => {
    //   cy.log('Checkbox checked state: ' + $checkbox.prop('checked'));

    //    if (!$checkbox.prop('checked')) {
    //     cy.log('Checkbox is already enabled');
    //    }
    //    else{
    //      cy.wrap($checkbox).click();    // Click to check the checkbox
    //      cy.log('Checkbox is now enabled');
    //     }    
    // } );
     cy.wait(1000);
     cy.xpath("(//button[@id='btnNext'])[1]").click();


  //scheduel summary page
  cy.wait(10000);
        // cy.xpath("(//span[normalize-space()='Schedule Summary'])[1]").click({ force: true });
        // cy.wait(1000);
        cy.get('#btnSelectScheduleSummary').click();
        cy.wait(6000);
        cy.get('#location > .ui-select-match > .btn-default').click();
        cy.wait(100);
        cy.get('#ui-select-choices-row-16-0 > .ui-select-choices-row-inner').click();
        cy.get('#seItemValuation > .ui-select-match > .btn-default').click();
        cy.get('#ui-select-choices-row-17-0 > .ui-select-choices-row-inner').click();
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
        cy.get('#ui-select-choices-row-18-1 > .ui-select-choices-row-inner').click();
        cy.get('#covpropDedType2Article > .ui-select-match > .btn-default > .ui-select-match-text').click();
        cy.get('#ui-select-choices-row-19-1 > .ui-select-choices-row-inner').click();
        cy.get('#covpropOption2Article > .ui-select-match > .btn-default').click();
        cy.get('#ui-select-choices-row-20-0 > .ui-select-choices-row-inner').click();
        cy.get('#btnAddScheduleEquipment').click();
        cy.wait(500);
      cy.xpath("//button[@id='btnSave']").click();
      cy.xpath("//button[@id='btnNext']").click({ force: true });
      cy.wait(60000);


      // coverages page
      cy.xpath("(//i[@class='fa indicator pull-right ng-scope fa-chevron-down'])[1]").click();
      cy.wait(500);
      cy.get('#spro')
        .should('be.visible')
     .then(($checkbox) => {
      cy.log('Checkbox checked state: ' + $checkbox.prop('checked'));

       if (!$checkbox.prop('checked')) {
        cy.wrap($checkbox).click();
        cy.log('Checkbox is now enabled');
       }
       else{
        // cy.wrap($checkbox).click();    // Click to check the checkbox
         cy.log('Checkbox is already enabled');
        }    

        cy.get('#sproLimit1').type('100');
    } );
    cy.xpath("(//input[@id='uncovpr'])[1]")
    .should('be.visible')
     .then(($checkbox) => {
      cy.log('Checkbox checked state: ' + $checkbox.prop('checked'));

       if (!$checkbox.prop('checked')) {
        cy.wrap($checkbox).click();
        cy.log('Checkbox is now enabled');
       }
       else{
        // cy.wrap($checkbox).click();    // Click to check the checkbox
         cy.log('Checkbox is already enabled');
        }    

        cy.get('#sproLimit1').type('100');
    } );
    cy.xpath("(//input[@id='uncovprLimit1'])[1]").type('100');

    cy.xpath("(//input[@id='terror'])[1]").

      should('be.disabled') // Verifies the element is disabled
      .and('have.attr', 'disabled') // Optionally, verify the "disabled" attribute is present (for form elements)
      //.and('not.be.focused') // Optionally check if it is not focused
      .and('have.css', 'pointer-events', 'none'); 
      cy.xpath("(//input[@id='polfeeFullTermAmount'])[1]").type('100');
        })
    });

