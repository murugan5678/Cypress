import 'cypress-xpath';
Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
describe("cypressfixtures ", ()=>{
before(function(){
    cy.fixture('example').then(function(data){
        Cypress.data=data
    }      
    )
})
it("login", ()=>{
    
    cy.visit("https://admin-demo.nopcommerce.com/login")
    cy.get("#Email").clear().type(Cypress.data.email)
    cy.get("#Password").clear().type(Cypress.data.password)
    cy.get("button[type='submit']").click().title().should('contain','Dashboard')

})

it("Invalid login", function(){
    
    cy.visit("https://admin-demo.nopcommerce.com/login")
    cy.get("#Email").clear().type(Cypress.data.email)
    cy.get("#Password").clear().type('Admin')
    cy.get("button[type='submit']").click()
    cy.get('.message-error.validation-summary-errors').should('contain','Login was unsuccessful. Please correct the errors and try again.')
})


it("have value", function(){
    cy.visit("https://www.leafground.com/input.xhtml;jsessionid=node011t24cna2cvbx1n8krbopffx2g769748.node0")
    cy.xpath("//input[@id='j_idt88:name']").type(Cypress.data.name).should('have.value','virat')
    
})
it("contain text", function(){
    cy.visit("https://www.leafground.com/menu.xhtml")
    cy.get(".ui-button-text.ui-c").click().should('contain', Cypress.data.buttonText)
})

it("visible", function(){
    cy.visit("https://www.leafground.com/menu.xhtml")
    cy.xpath("//span[normalize-space()='Shipments']").should('contain', Cypress.data.shipment).should('be.visible')
    
})
it("enabled", function(){
    cy.visit("https://www.amazon.in/l/29657746031/&ref_=ine_mart24gw_nw_ds_urrnp_emn/?_encoding=UTF8&pd_rd_w=5nWqc&content-id=amzn1.sym.8df47416-9294-48fe-a3b8-1afef37920a6&pf_rd_p=8df47416-9294-48fe-a3b8-1afef37920a6&pf_rd_r=XBPCEMZNZ3Q445KJE4T3&pd_rd_wg=VGtu2&pd_rd_r=bb61e2bd-1d44-41d0-a019-d80d470e8eae&ref_=pd_hp_d_hero_unk")
    cy.get( Cypress.data.search).type("pencil")
    cy.get(Cypress.data.submit).click().should('be.enabled')
  
})
})