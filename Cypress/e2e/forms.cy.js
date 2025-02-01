import 'cypress-xpath';
describe('form page', ()=>{

it('forms page automation', ()=>{

    cy.viewport(1700, 1000);
    cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=9041233&lob=Inland&bookLocId=2100&book=1100")
    cy.get('#username').type('murugan@auxosolutions.io') //username
    cy.get('#password').type('Muru!@12345678') //password
    cy.get("input[value='Login']").click() //login button


    cy.wait(11000);
    cy.xpath("(//span[normalize-space()='Forms'])[1]").click();
    cy.wait(5000);
    cy.xpath("(//button[@id='btnAddForm'])[1]").click();
    cy.wait(2000);
    cy.xpath("(//span[@class='ui-select-placeholder text-muted ng-binding'])[1]").click();
    cy.xpath("(//span[@class='ui-select-choices-row-inner'])[1]").click();
    cy.xpath("(//input[@id='searchForm'])[1]").type('8');
    cy.xpath("(//button[@id='fgFilterBarBtnLeftBtnForm'])[1]").click();
    cy.xpath("(//button[@id='btnSearchForm'])[1]").click();
    cy.wait(2000);
    cy.xpath("(//input[@type='checkbox'])[7]").click();
    cy.xpath("(//input[@type='checkbox'])[17]").click();
    cy.xpath("(//input[@type='checkbox'])[27]").click();
    cy.wait(2000);
cy.xpath("(//button[@id='btnSelectForm'])[1]").click();
cy.xpath("(//span[normalize-space()='Save Changes'])[1]").click();
cy.wait(5000);
cy.xpath("(//span[normalize-space()='Next'])[1]").click();

})
})