class LocationPage {
    addLocation() {
      cy.wait(8000);
      cy.get('#btnOpenModal').click();
      cy.get('.css-1g6gooi').type('70').eq(0).click({ force: true });
      cy.xpath("(//button[@id='btnAddLocation'])[1]").click({ force: true });
      cy.get('#btnNext').click();
    }
  }
  
  export default new LocationPage();
  