import 'cypress-xpath';
import subjectivities from '../support/pageObject/subjectivities.cy'
describe('schedule Info', ()=> {
    it('Login', ()=> {
        cy.viewport(1700, 1000);
        cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting/#/display/application-details?contract=10217233&lob=Inland&bookLocId=2100&book=1100")
        cy.get('#username').type('murugan@auxosolutions.io') //username
        cy.get('#password').type('Muru!@12345678') //password
        cy.get("input[value='Login']").click() //login button

        cy.wait(15000);
      subjectivities.navigateToSubjectivities();
      subjectivities.selectConditionWaranty();
      subjectivities.selectRemark();
      subjectivities.selectSubjectivitie();
      subjectivities.clickAddButton();
      subjectivities.clickSaveButton();
      subjectivities.clickNextButton();

    })
})