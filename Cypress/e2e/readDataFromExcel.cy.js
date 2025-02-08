describe('Read Data from Excel with cy.task()', () => {
    it('should read Excel data and use it in tests', () => {
      
      const filePath = 'cypress/fixtures/cypress.xlsx'; 
      const sheetName = 'Sheet1'; 
  
      cy.task('readExcel', { filePath, sheetName }).then((data) => {
       
        cy.log('Excel Data:', JSON.stringify(data));
  
        
        expect(data).to.have.length(3); 
        expect(data[0].Name).to.equal('Alice'); 
      });
    });
  });
  