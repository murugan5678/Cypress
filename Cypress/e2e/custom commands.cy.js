import 'cypress-xpath';
describe('Day7Automation', function(){

    // execute before all the code-- login the page
    before('login', ()=>{
        cy.visit('https://demo.opencart.com/index.php?route=account/login&language=en-gb')
        cy.get("#input-email").type('test@gmail.com')
        cy.get('#input-password').type('Test8768')
        cy.get("button[type='submit']").click()
    })
    // end of all the code
    after('code end time', ()=>{
        cy.log(new Date().toLocaleTimeString())
    })
    //before each code block it execute
    beforeEach(function(){
           cy.log(new Date().toLocaleTimeString())
           })
           //after each code block it execute
     afterEach('screenshot',function(){
                cy.screenshot('test-screenshot',{capture: 'fullPage' });
               })  
               
     //select an item          
    it('select an item', ()=>{
      cy.visit("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
      cy.xpath("//a[normalize-space()='iPhone']").click()
    //add qauntity 
    })
    // it('add qauntity', ()=>{
    //     cy.visit("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
    //   cy.xpath("//a[normalize-space()='iPhone']").click()
    //   cy.get('#input-quantity').type(4)
    // })
    //click review tabs
    it('click review tabs', ()=>{
        cy.visit("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
        cy.xpath("//a[normalize-space()='iPhone']").click()
        cy.get('#input-quantity').type(4)
        cy.xpath("(//a[normalize-space()='Reviews (0)'])[1]", { timeout: 1000 }).click()
    })
    
    
    })