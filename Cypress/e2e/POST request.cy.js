describe('POST API Request Test', () => {
    it('should create a new user via POST request', () => {
      const requestData = {
        name: 'morpheus',
        job: 'zion resident'
        
      };
  
      // Send a POST request to the API
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users', 
        body: requestData, 
        headers: {
          'Content-Type': 'application/json' 
        }
      }).then((response) => {
        
        expect(response.status).to.eq(200); 
  
        
        expect(response.body).to.have.property('id'); 
        expect(response.body.name).to.eq(requestData.name);
        expect(response.body.email).to.eq(requestData.email);
      });
    });
  });
  