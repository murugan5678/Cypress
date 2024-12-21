
describe('Day6Automation', ()=>{
  
    it('web table: verify the value presence', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table[name=BookTable]').contains('th','Author').should('be.visible')
    })
    
    it('web table: verify the value presence in row and column', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("table[name=BookTable] > tbody > tr:nth-child(6) > td:nth-child(3)").contains('JAVA')
    })
    
    it('web table:value presence based on iterating rows', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('table[name=BookTable],> tbody > tr td:nth(3)').each(($e,index,$list)=>{
            const text =$e.text()
            if(text.includes("	JAVA"))
            {
                cy.get('table[name=BookTable] > tbody > tr  td:nth-child(2)').eq(index).then(function(author )
            {
                const authorName=author.text()
                expect(authorName).to.equal('Amod')
            })
            
            }
        })
    })
    // verify the value presence in the table 
    it('verify the value presence', ()=>{
        cy.visit('https://ninjatables.com/examples-of-data-table-design-on-website/')
        cy.get("#footable_17874").contains('td', 'Accountant')
    })
    //verify the exact value presence in the row and column 
    it('verify the value presence in row and column', ()=>{
        cy.visit('https://ninjatables.com/examples-of-data-table-design-on-website/')
        cy.get("#footable_17874 > tbody > tr:nth-child(4) td:nth-child(4)").contains("New York")
    })
    // verify the value based on iterating rows
    it('value presence based on iterating rows', ()=>{
        cy.visit('https://ninjatables.com/examples-of-data-table-design-on-website/') 
        cy.get("#footable_17874 > tbody > tr td:nth-child(2)").each(($e,index,$list)=>{
            const text=$e.text()
            if(text.includes("Harris"))
            {
                cy.get('#footable_17874 > tbody > tr td:nth-child(1)').eq(index).then(function(name)
            {
                const firstName=name.text()
                expect(firstName).to.equal('Nile')
            })
            }
        })
    })
    // verify the multiple value based on iterating rows
    it('multiple value presence based on iterating rows', ()=>{
        cy.visit('https://ninjatables.com/examples-of-data-table-design-on-website/') 
        cy.get("#footable_17874 > tbody > tr td:nth-child(2)").each(($e,index)=>{
            const text=$e.text()
            if(text.includes("Harris"))
            {
                
                cy.get('#footable_17874 > tbody > tr td:nth-child(1)').eq(index).should('contain','Nile')
                cy.get('#footable_17874 > tbody > tr td:nth-child(3)').eq(index).should('contain','Development Lead')
                cy.get('#footable_17874 > tbody > tr td:nth-child(4)').eq(index).should('contain','New York')
                
            }
        })
    })
    
    })