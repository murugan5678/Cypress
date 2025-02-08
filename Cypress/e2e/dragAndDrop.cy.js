Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
import 'cypress-xpath';


describe('drag adn drop', ()=>{

    it('drag and drop sample 1', ()=>{
       
        cy.visit("https://practice.expandtesting.com/drag-and-drop")
        cy.get('#column-a').drag('#column-b');
        cy.wait(2000);
        cy.log('successfully dropped')
    })
it('drag and drop sample 2', ()=>{
   
    cy.visit("https://demo.automationtesting.in/Static.html");
    cy.get('#angular').drag('#droparea');
    cy.log('successfully dropped 1st image')
    cy.get('#mongo').drag('#droparea');
    cy.log('successfully dropped 2nd image')
    cy.get('#node').drag('#droparea');
    cy.log('successfully dropped 3rd image')

} )

    it('mouse over', ()=>{
        cy.visit("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=728858856234&hvpos=&hvnetw=g&hvrand=12285045185742403105&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299459&hvtargid=kwd-64107830&hydadcr=14452_2409549&gad_source=1");
        cy.xpath("(//span[normalize-space()='Prime'])[1]").trigger('mouseover');
        cy.get('#multiasins-img-link').should('be.visible');
        cy.log('mouse overed successfully');

    })
    it('mouse leave', ()=>{
        cy.visit("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=728858856234&hvpos=&hvnetw=g&hvrand=12285045185742403105&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299459&hvtargid=kwd-64107830&hydadcr=14452_2409549&gad_source=1");
        cy.get("span[class='nav-line-2 ']").trigger('mouseleave');
        cy.get("#nav-al-signin").should('not.be.visible');
        cy.log('mouse overed successfully');

    })

    it('mouse movements', ()=>{
        cy.visit("https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=728858856234&hvpos=&hvnetw=g&hvrand=12285045185742403105&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9299459&hvtargid=kwd-64107830&hydadcr=14452_2409549&gad_source=1");
        cy.get("img[alt='Great republic day sale']").trigger('mousedown')
                                    .trigger('mousedown')
                                    .trigger('mousemove')
                                    .trigger('mouseup')
                                    .trigger('mouseleft', {which: 1, pageX:600, pageY:100})
                                    .trigger('mouseright', {which: 1, pageX:600, pageY:600})
                                    .debug();
    })
   
      
   
})