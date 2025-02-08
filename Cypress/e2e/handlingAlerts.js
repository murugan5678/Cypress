import 'cypress-xpath';
describe("Day4Automation", ()=>{
    //Alert
        it('Alert', ()=>{
                   cy.visit('https://www.leafground.com/alert.xhtml')
                   cy.get('body > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)').click()
                //getting text in the alert  
                 cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am simple alert.');
           })
               // getting result text of alert
              cy.xpath("//span[@id='simple_result']").should('have.text','You have successfully clicked an alert')
    })
    
    // window conformation alert
    it('window conformation alert', ()=>{
                    cy.visit("https://www.leafground.com/alert.xhtml")
                   cy.get("button[id='j_idt88:j_idt93'] span[class='ui-button-text ui-c']").click()
              //getting text of alert
               cy.on("window:confirm", (t)=>{
                 expect(t).to.contains('Did you call me?');
               })
                //getting result text
                cy.get('#result').should('have.text','User Clicked : OK')
    })
    
    // window conformation alert by cancel
    it('window conformation alert by cancel', ()=>{
          cy.visit("https://www.leafground.com/alert.xhtml")
          cy.get("button[id='j_idt88:j_idt93'] span[class='ui-button-text ui-c']").click()
          //getting text of alert
          cy.on("window:confirm", (t)=>{
          expect(t).to.contains('Did you call me?');
         })
          //alert close by cancel 
          cy.on("window:confirm", ()=> false)
         //getting result text
         cy.get('#result').should('have.text','User Clicked : Cancel')
    })
    //prompt window alert
    it('Prompt window', ()=>{
           cy.visit('https://www.leafground.com/alert.xhtml')
           cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('cypress');
        })
    
          cy.xpath('//button[@id="j_idt88:j_idt104"]').click()
        cy.get('#confirm_result').should('have.text','User entered name as: cypress')
    
    })
    
    
    it('Authentication alert', ()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                    {
                                                                        username: "admin",
                                                                        password: "admin"
                                                                    }})
       cy.get("div[class='example'] p").should('have.contain','Congratulations!')
    })
    
    //browser navigation
    it('browser navigation', ()=>{
        cy.visit("https://www.flipkart.com/")
        cy.xpath("//a[@aria-label='Mobiles']").click()
        cy.go('back')
        cy.title().should('eq',"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
            cy.go(1)
            cy.reload();
            
    })
    // it('browser navigation forward', ()=>{
    //     cy.visit("https://www.flipkart.com/")
    //     cy.xpath("//a[@aria-label='Mobiles']").click()
    //     cy.go('back')
    //     cy.title().should('eq',"Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    //         cy.go(1)
    //         cy.reload();
           
    // })
    //input boxes
    it('textbox', ()=>{
        cy.visit('https://www.leafground.com/input.xhtml')
        cy.xpath("//input[@id='j_idt106:float-input']").type('welcome')
    })
    
    //clear the text
    it('clear the text',()=>{
       cy.visit('https://www.leafground.com/input.xhtml') 
       cy.xpath("//input[@id='j_idt88:j_idt95']").clear()
    })
    //textbox date picker
    it('textbox date picker', ()=>{
         cy.visit("https://www.leafground.com/input.xhtml")
        cy.xpath("//input[@id='j_idt106:j_idt116_input']").click()
        cy.xpath("//a[normalize-space()='4']").click()
    })
    //text box error message will show if not enter anytext and click enter
    it('error message if not enter any text', ()=>{
        cy.visit("https://www.leafground.com/input.xhtml")
        cy.xpath('//input[@id="j_idt106:thisform:age"]').type('{enter}').then(()=>{
            cy.xpath(' //span[@id="j_idt106:thisform:j_idt110_error-detail"]').should('be.visible')
        })
    })
    
    //enter word and choose 4th option in the suggestion
    it('type a word and choose option based on suggestion', ()=>{
        cy.visit('https://www.leafground.com/input.xhtml')
        cy.xpath("//ul[@class='ui-autocomplete-multiple-container ui-autocomplete-dd-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-left']").type('welcom{downarrow}{downarrow}{downarrow}{enter}')
    })
    
    }) 