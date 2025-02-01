import loginPage from '../support/pageObject/loginPage.js';
import dashboardPage from '../support/pageObject/dashboardPage.js';
import quotingPage from '../support/pageObject/quotingPage.js';
import agreementsPage from '../support/pageObject/agreementsPage.js';
import locationPage from '../support/pageObject/locationPage.js';
import schedulePage from '../support/pageObject/schedulePage.js';

import userCredentialsInland from '../fixtures/userCredentialsInland.json';

import coverage from '../support/pageObject/coverage.js';
import 'cypress-xpath';

describe('Inland Marine', () => {
  before('title check', ()=>{
    cy.visit("https://rsum-qa-uatx.unqork.io/app/suremga#/display/applications-dashboard")
    cy.title().then((title)=>{
        cy.log(title);
    })
  })
   beforeEach('clear text', ()=>{
    cy.log(new Date().toLocaleTimeString())
    
  })
  // after('screenshot',function(){
  //   cy.screenshot('test-screenshot',{capture: 'fullPage' });
  //  }) 
  afterEach('code end time', ()=>{
      cy.log(new Date().toLocaleTimeString())
  })
  it('Inland marine application', () => {
    loginPage.visit();
    loginPage.fillCredentials(userCredentialsInland.username, userCredentialsInland.password);
    loginPage.submitLogin();
    loginPage.bypassPrompt();
    
    loginPage.refreshModal();
    loginPage.closePreviewBar();
    

    dashboardPage.changeC1User();
     cy.wait(1000);
    dashboardPage.searchApplication(userCredentialsInland.applicationid);

    cy.visit("https://rsum-qa-uatx.unqork.io/app/quoting#/display/application-details?contract=8971233&lob=Inland&bookLocId=2100&book=1100");

    quotingPage.fillMandatoryFields();
    quotingPage.selectUnderwriter();
    quotingPage.enterPremium(userCredentialsInland.premium);
    quotingPage.selectAgency(userCredentialsInland.agency);
    cy.wait(2000);

    //Risk location page
    locationPage.addLocation(userCredentialsInland.address);
    //Agreements page
    agreementsPage.agencyCommision(userCredentialsInland.agencyvalue);
    agreementsPage.agreementsSelect();
    // schedule summary page
    schedulePage.fillScheduleDetails(userCredentialsInland.description, userCredentialsInland.itemnumber, userCredentialsInland.insvalamount, userCredentialsInland.sernum, userCredentialsInland.sedescription);
    schedulePage.addSchedule(userCredentialsInland.limit, userCredentialsInland.occurance);

    // cy.xpath("//button[@id='btnSave']").click();
    // cy.xpath("//button[@id='btnNext']").click();
    cy.wait(60000);
  
  //coverages
  coverage.selectProduct();
  coverage.enterValues(userCredentialsInland.schvalue, userCredentialsInland.unschvalue);

  
  
  
  });


});
