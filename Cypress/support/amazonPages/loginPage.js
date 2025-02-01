
class LogniPage {

    launchPage(amazonurl){

        cy.visit(amazonurl);

    }

    signIn(username, password){
        
    
       cy.wait(2000);
        cy.xpath("(//span[normalize-space()='Account & Lists'])[1]").trigger('mouseover');
        cy.wait(2000);
        cy.xpath("(//span[@class='nav-action-inner'])[1]").click({force : true});
        // cy.get(".nav-action-inner").click();
        cy.wait(4000);
        cy.get('#ap_email').type(username);
        cy.get('.a-button-input').click();
        cy.wait(4000);
        cy.xpath("(//input[@id='ap_password'])[1]").type(password);
        cy.get('#signInSubmit').click();

    }

   
}

export default new LogniPage();