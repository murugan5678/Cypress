describe('Handling Alerts and Popups', () => {
    beforeEach(() => {
      // Visit the webpage
      cy.visit('https://testautomationpractice.blogspot.com/');
    });
  
    it('should handle Simple Alert', () => {
      // Handle Simple Alert
      cy.contains('Simple Alert').click(); // Click on the Simple Alert button
      cy.on('window:alert', (text) => {
        // Assert the alert text
        expect(text).to.include('I am an alert box!');
      });
    });
  
    it('should handle Confirmation Alert', () => {
      // Handle Confirmation Alert
      cy.contains('Confirmation Alert').click(); // Click on the Confirmation Alert button
      cy.on('window:confirm', (text) => {
        // Assert the confirmation text
        expect(text).to.include('Press a button!');
        return true; // Click OK
      });
    });
  
    it('should handle Prompt Alert', () => {
      // Stub the prompt and handle it
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Harry Potter'); // Stub the prompt with a predefined value
      });
      cy.contains('Prompt Alert').click(); // Click on the Prompt Alert button
  
      // Validate that the user pressed OK
      cy.get('#demo') // Replace with the correct element selector if needed
        .should('contain.text', 'Harry Potter');
    });
  });
  

