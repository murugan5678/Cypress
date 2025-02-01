class coverage{
    selectProduct(){
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
  
          cy.get('#sproLimit1').clear().type('100');
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
  
          cy.get('#sproLimit1').clear().type('100');
      } );
    }
      enterValues(schvalue, unschvalue){
      cy.xpath("(//input[@id='uncovprLimit1'])[1]").clear().type('100');
    cy.wait(2000)
      cy.xpath("(//input[@id='terror'])[1]")
        .should('be.disabled') 
        .and('have.attr', 'disabled');            
      
        cy.xpath("(//input[@id='polfeeFullTermAmount'])[1]").clear().type('100');
        cy.xpath("(//input[@id='sproLimit1'])[1]").clear().type(schvalue);
        cy.xpath("(//input[@id='uncovprLimit1'])[1]").clear().type(unschvalue)
  
        cy.wait(1000)
        cy.xpath("(//button[@id='btnCustomPrimaryOne'])[1]").click();
        cy.wait(30000)
        cy.wait(1000);
      cy.screenshot("coverages page");
        cy.xpath("(//button[@id='btnNext'])[1]").click();



    }
    }
    export default new coverage();