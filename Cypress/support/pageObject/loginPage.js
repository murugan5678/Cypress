class LoginPage {
    visit() {
      cy.viewport(1700, 1000);
      cy.visit("https://rsum-qa-uatx.unqork.io/app/suremga#/display/applications-dashboard");
    }
  
    fillCredentials(username, password, ) {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
    }
  
    submitLogin() {
      cy.get("input[value='Login']").click();
    }
  
    bypassPrompt() {
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('cypress');
      });
    }
  
    closePreviewBar() {
      cy.get("button[aria-label='Hide Preview Bar']").click();
    }
  
    refreshModal() {
      cy.wait(8000);
      cy.get("#btnRefreshModalOK2").click();
    }
  }
  
  export default new LoginPage();
  