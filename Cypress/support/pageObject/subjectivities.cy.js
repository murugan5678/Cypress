class Subjecities{

navigateToSubjectivities(){
    cy.xpath("(//span[normalize-space()='Subjectivities'])[1]").click();
    cy.wait(6000);
}

selectConditionWaranty(){
    //select the condition/waranty
    cy.xpath("(//input[@type='checkbox'])[9]").click();
    cy.wait(2000);
}
selectRemark(){
//select the Remark
cy.xpath("(//input[@type='checkbox'])[5]").click();
cy.wait(2000);
}

selectSubjectivitie(){
    //select the subjectivity
    cy.xpath("(//input[@type='checkbox'])[24]").click();

    cy.wait(2000);
}

clickAddButton(){
    cy.xpath("(//button[@id='btnAddCondition'])[1]").click();
    cy.wait(4000);

}

clickSaveButton(){
    cy.xpath("(//button[@id='btnSaveToC1'])[1]").click();
}
clickNextButton()
{
    cy.xpath("(//button[@id='btnNext'])[1]").click();
}
}

export default new Subjecities();