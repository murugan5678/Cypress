import 'cypress-xpath';
describe('Inland Marine', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=9041233&lob=Inland&bookLocId=2100&book=1100")
        cy.get('#username').type('murugan@auxosolutions.io') //username
        cy.get('#password').type('Muru!@12345678') //password
        cy.get("input[value='Login']").click() //login button

        //To validate the mandatory fields are pre-filled values
        cy.get("button[aria-label='Hide Preview Bar']").click();
        const mandatoryFields = ['#inInsured', '#inCity', '#inState', '#inZip', '#inCountry',];
        mandatoryFields.forEach(fieldId =>{
            cy.get(fieldId, { timeout: 20000 }).should('have.attr', 'required');
            cy.get(fieldId).should('not.have.value', '');
        });

        // To select Associate from Associate dropdown field
        cy.get("div[id='poAssociate'] span[aria-label='Select box activate']").click({ force: true });
        cy.get("div[id='ui-select-choices-row-1-3'] span[class='ui-select-choices-row-inner']").click({ force: true });

        //To select Renewal Underwriter from Renewal Underwriter dropdown field
        cy.get("#poRenewalUnderwriter > .ui-select-match > .btn-default").click({ force: true });
        cy.get("#ui-select-choices-row-4-2 > .ui-select-choices-row-inner").click({ force: true });

        //To select SIC from SIC  dropdown field
       cy.get("#poSicCode > .ui-select-match > .btn-default").click({ force: true });
       cy.wait(2000);
       cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click({ force: true });
      //To clear the Minimum Earned Premium value and enter the new value
      //cy.xpath("(//input[@id='poMinimumEarnedPremiumDisplay'])[1]").clear().type('-1');
     // cy.xpath("//li[@class='ng-binding ng-scope'])[1]").should('have.text', 'Minimum Earned Premium must be greater than or equal to 0');
      //cy.xpath("(//input[@id='poMinimumEarnedPremiumDisplay'])[1]").clear().type('105');
      //cy.xpath("(//li[@class='ng-binding ng-scope'])[1]").should('have.text', 'Minimum Earned Premium must be less than or equal to 100');

      cy.get("#poMinimumEarnedPremiumDisplay").clear().type('2');
      //To click the select agency button
      cy.get("#btnOpenAgencyGridModal").click();
      cy.wait(10000);
      //To search the value in search field
      cy.get('#dropSearchTextTypeAgency > .ui-select-match > .btn-default > .caret').click({ force: true });
      cy.get('#ui-select-choices-row-11-1 > .ui-select-choices-row-inner').click({ force: true });
      cy.get('#searchAgency').type('8');
      cy.get('#fgFilterBarBtnLeftBtnAgency').click();
      cy.get('.jsgrid-row > .jsgrid-control-field > .pull-right').click();
      cy.get('#btnSearchAgency').click();
      cy.wait(10000);
      cy.get('.ag-row-first > .unq-dynamic-grid__checkbox-cell > .ag-react-container > .unq-dynamic-grid__checkbox > input').click();
      cy.get('#btnSelectAgency').click();

      //To click the Next button in app details page
      cy.get('#btnNext').click();

      //Risk locations
      cy.wait(20000);
    //   cy.get('[comp-id="497"] > .ag-react-container > .unq-dynamic-grid__cell-value').click({ force: true });
    //   cy.wait(1000);
      //cy.get('#riDescription').clear().type('test');
    //   cy.wait(5000);
    //   cy.get('#btnEditLocation').click();
    //   cy.wait(1000);
      cy.xpath("(//span[normalize-space()='Add Location'])[1]").click();
      cy.wait(2000);
      cy.get('.css-1g6gooi', { timeout: 5000 }).type('70', { timeout: 1000 }).wait(500).eq(0).click({ force: true });
      cy.wait(1000);
      cy.xpath("(//button[@id='btnAddLocation'])[1]").click({ force: true });
      cy.wait(1000);
      //To click the Next button in risk locations page
      cy.xpath("(//button[@id='btnNext'])[1]").click({ force: true });
      cy.wait(10000);

     //Agreements
     //To clear and enter the value in Agency Commission field
     cy.get("#newRate").clear().type('10')
     //Select Agreements
     cy.wait(1000);
     //cy.get('.unq-dynamic-grid__checkbox > input').click();
    //cy.xpath("(//div[@aria-label='Context Menu'])[1]").click({ force: true });
    //cy.xpath("(//div[@class='ag-center-cols-viewport'])[1]").click();
    cy.get('.unq-dynamic-grid__checkbox > input').click(); // Adjust the selector based on your checkbox
     cy.xpath("(//input[@id='disableUnselectedToggle'])[1]").click().wait(10000).click();
     cy.get('.unq-dynamic-grid__checkbox > input').click();

    // cy.get('.unq-dynamic-grid__checkbox > input') // Adjust the selector based on your checkbox
    // .then(($checkbox) => {
    //   if (!$checkbox.prop('checked')) { // If the checkbox is not checked
    //     cy.wrap($checkbox).click();    // Click to check the checkbox
    //   }
    // });
  
    //  //cy.xpath("(//button[@id='btnSave'])[1]").click({ force: true });
    //   cy.wait(1000);
    //  //To click the Next button in agreements page
    //  cy.xpath("(//button[@id='btnNext'])[1]").click();
     
    });
    })