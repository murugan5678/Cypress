class LoginPage{

visit(saucedemourl){
    cy.visit(saucedemourl);

}

login(username, password){
    cy.wait(500);
    cy.xpath("(//input[@id='user-name'])[1]").type(username);
    cy.xpath("(//input[@id='password'])[1]").type(password);
    cy.xpath("(//input[@id='login-button'])[1]").click();
}

}
export default new LoginPage();