
class SelectProducts{

selectProduct(){
    cy.xpath("(//div[@class='NavBarDesktop__Subtitle-sc-xsryom-0 izctWL'])[3]").trigger('mouseover')
    cy.xpath("(//p[normalize-space()='All Top Wear'])[1]").click();

}

sortBy(){
    cy.xpath("(//div[@value='Relevance'])[1]").click();
    cy.xpath("(//div[@class='sc-gScZFl hhOUsY'])[2]").click();
    
}

}