import 'cypress-xpath';
describe('Automation', ()=>{
    const devices = [
        { name: 'iphone-5', viewport: 'iphone-5' },
        { name: 'iPhone X', viewport: 'iphone-6+' },
        { name: 'iphone-7', viewport: 'iphone-7' },
        { name: 'iphone-8', viewport: 'iphone-8' },
      ];
      devices.forEach(device => {
    
    
    it('responsive', ()=>{
        cy.viewport(device.viewport);
            cy.visit("http://www.flipkart.com")
            cy.xpath("(//img[@alt='Mobiles'])[1]").click();
            cy.xpath("(//a[normalize-space()='Login'])[1]").click( {force: true} );
            cy.xpath("(//input[@class='r4vIwl BV+Dqf'])[1]").type('0987654321');
            })

        });
    });
