import 'cypress-xpath';
describe('Inland Marine', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=9493233&lob=Inland&bookLocId=2100&book=1100")
        cy.get('#username').type('murugan@auxosolutions.io') //username
        cy.get('#password').type('Muru!@12345678') //password
        cy.get("input[value='Login']").click() //login button

    cy.wait(25000);

    cy.xpath("(//span[normalize-space()='Quote Options'])[1]").click();
    cy.wait(8000);

    //Clone

    // cy.get('[comp-id="164"] > .unq-dynamic-grid__checkbox-cell > .ag-react-container > .unq-dynamic-grid__checkbox > input').click();
    //cy.xpath("(//div)[674]").click();  
    //  cy.wait(1000);
    // cy.xpath("(//span[normalize-space()='Clone'])[1]").click();
    // cy.wait(25000);
    


    //Present

    cy.get('[comp-id="180"] > .unq-dynamic-grid__checkbox-cell > .ag-react-container > .unq-dynamic-grid__checkbox > input')
    .should('exist')
    .then(($checkbox) => {
        const checkbox = $checkbox;
        cy.wrap(checkbox)
        .check({ force: true })
        
    });
          cy.wait(2000);
          cy.xpath("(//button[@id='btnPresentOption'])[1]").click();
          cy.wait(25000);

          cy.get('#toOverrideUser > .button-label').click();
          cy.get('#btnViewAndOrder1').click();
          cy.wait(5000);
          cy.get('#dgDocName1').type('test');
          cy.get('#btnSaveTemplate').click();
          cy.get('#btnSendEmail').click();

            cy.wait(40000);

          //submit

cy.xpath("(//input[@type='checkbox'])[19]")
.should('exist')
    .then(($checkbox) => {
        const checkbox = $checkbox;
        cy.wrap(checkbox)
        .check({ force: true })
        
    });
    cy.wait(1000);
cy.xpath("(//button[@id='btnBindOption'])[1]").click();
cy.wait(7000);
cy.xpath("(//input[@id='polnum'])[1]").type('9510233')
cy.xpath("(//input[@id='affiliateinfo'])[1]").type('murugan@auxosolutions.io')
cy.xpath("(//button[@id='btnRequestBind'])[1]").click();

//clone
cy.wait(4000);
cy.xpath("(//input[@type='checkbox'])[19]")
    .should('exist')
    .then(($checkbox) => {
        const checkbox = $checkbox;
        cy.wrap(checkbox)
        .check({ force: true })
        
    });
     cy.wait(2000);
     cy.xpath("(//button[@id='btnCloneOption'])[1]").click(); 
     cy.wait(4000);

    // cy.get('.ag-header-cell-label').contains('Status').should('be.visible');

    // cy.get('.ag-theme-dynamic-grid.ag-popup').each(($row) => {
       
    //     cy.wrap($row).find('.ag-cell').eq(1) 
    //       .then(($statusCell) => {
    //         const statusText = $statusCell.text().trim();
  
            
    //         if (statusText === 'Submitted') {
              
    //           cy.wrap($row).find('.accept-button-class').click(); 
    //           cy.wrap($row).find('.ag-cell').eq(1).should('have.text', 'Preparing Quote');
    //         } else if (statusText === 'Preparing Quote') {
              
    //           cy.wrap($row).find('.present-button-class').click();
    //           cy.wrap($row).find('.ag-cell').eq(1).should('have.text', 'Presented');
    //         } else if (statusText === 'Presented') {
              
    //           cy.wrap($row).find('.submit-button-class').click(); 
    //           cy.wrap($row).find('.ag-cell').eq(1).should('have.text', 'Submitted');
    //         } else {
    //           cy.log('Unknown status: ' + statusText);
    //         }
    //       });
     
    // })
    })
})