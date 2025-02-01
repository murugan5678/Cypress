import homePage from "../support/meesho/homePage.js";

describe('meesho webpage', ()=>{
    it('meesho automation', ()=>{
        cy.viewport(1700, 1000);
        homePage.launchPage(meeshourl);
        
    })
})