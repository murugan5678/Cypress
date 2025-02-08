import 'cypress-xpath';
describe("Day4Automation", ()=>{
    //Alert
        it('Alert', ()=>{
                   cy.visit('https://www.leafground.com/alert.xhtml')
                   cy.on('window:alert', (t)=>{
                    expect(t).to.contains("button[onclick='jsPrompt()']");
                   })
              //cy.xpath("button[onclick='jsPrompt()']").type('test')   
    })
})