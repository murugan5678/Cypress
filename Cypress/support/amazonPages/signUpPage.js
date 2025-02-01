class SignUpPage{

    signUp(){
        cy.wait(2000);
        cy.xpath("(//span[normalize-space()='Account & Lists'])[1]").trigger('mouseover');
        cy.wait(2000);
        cy.xpath("(//a[normalize-space()='Start here.'])[1]").click();
        cy.wait(4000);
        cy.get('#ap_email_login').type('9941414459');
    }
}