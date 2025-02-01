import loginPage from "../support/flipkartPages/loginPage";
import productselect from "../support/flipkartPages/productselect";
import userCredentials from "../fixtures/userCredentials.json";
describe('Flipkart Page', ()=>{
    before(()=>{
        cy.log('Test has been starting');
    })
    
    beforeEach(()=>{
        
        cy.log(`Current Timestamp: ${Date.now()}`);
    })
    // after(()=>{
    //     cy.log('Test completed')
    // })
    // afterEach(()=>{
    //     cy.screenshot();
    // })


it('login', ()=>{
     loginPage.url(userCredentials.url);
     loginPage.searchIphone(userCredentials.iphone);
     productselect.selectRange();
     
     productselect.NavigateToAc();
});
});