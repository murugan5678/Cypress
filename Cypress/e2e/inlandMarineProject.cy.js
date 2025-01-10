import loginPage from '../support/pageObject/loginPage.js';
import dashboardPage from '../support/pageObject/dashboardPage.js';
import quotingPage from '../support/pageObject/quotingPage.js';
import agreementsPage from '../support/pageObject/agreementsPage.js';
import locationPage from '../support/pageObject/locationPage.js';
import schedulePage from '../support/pageObject/schedulePage.js';
import userCredentials from '../Cypress/cypress/fixtures/userCredentials.json';

import 'cypress-xpath';

describe('Inland Marine', () => {
  it('Login and create an application', () => {
    loginPage.visit();
    loginPage.fillCredentials(userCredentials.username, userCredentials.password);
    loginPage.submitLogin();
    loginPage.bypassPrompt();
    
    loginPage.refreshModal();
    loginPage.closePreviewBar();
    

    dashboardPage.changeC1User();
     cy.wait(1000);
    dashboardPage.searchApplication(userCredentials.applicationid);

    cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=8971233&lob=Inland&bookLocId=2100&book=1100");

    quotingPage.fillMandatoryFields();
    quotingPage.selectUnderwriter();
    quotingPage.enterPremium();
    quotingPage.selectAgency();
    cy.wait(2000);

    //Risk location page
    locationPage.addLocation();
    //Agreements page
    agreementsPage.agencyCommision(userCredentials.agencyvalue);
    agreementsPage.agreementsSelect();
    // schedule summary page
    schedulePage.fillScheduleDetails(userCredentials.description, userCredentials.itemnumber, userCredentials.insvalamount, userCredentials.sernum, userCredentials.sedescription);
    schedulePage.addSchedule();

    cy.xpath("//button[@id='btnSave']").click();
    cy.xpath("//button[@id='btnNext']").click();
    cy.wait(60000);
  });
});
