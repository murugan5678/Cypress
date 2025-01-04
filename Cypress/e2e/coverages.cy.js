import 'cypress-xpath';
describe('Inland Marine', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=9041233&lob=Inland&bookLocId=2100&book=1100")
        cy.get('#username').type('murugan@auxosolutions.io') //username
        cy.get('#password').type('Muru!@12345678') //password
        cy.get("input[value='Login']").click() //login button

    cy.wait(5000);
     cy.xpath("(//span[normalize-space()='Coverages'])[1]").click();
    cy.wait(10000);
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