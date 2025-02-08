describe('Mock Database Testing in Cypress', () => {
    it('Should read user data from mock JSON', () => {
      cy.fixture('mockDb.json').then((db) => {
        cy.log('Mock User Data:', JSON.stringify(db.users));
        
        expect(db.users).to.have.length(2); // Validate number of users
        expect(db.users[0]).to.have.property('username', 'alice'); // Validate first user
      });
    });
  });
  