import 'cypress-xpath';
describe(('ultimate QA'), ()=>{
it('ultimate QA', ()=>{
    cy.viewport(1700, 1000);
    cy.visit("https://ultimateqa.com/consulting/");
    cy.wait(2000);
    //cy.get('.et_pb_row_6 > .et_pb_column > .et_pb_button_module_wrapper > .et_pb_button').click();
    cy.wait(500);
})
it('signup', ()=>{
    cy.visit('https://forms.clickup.com/2314027/p/f/26ktb-6387/56LKNUZ9BDYXSC73SY/unlock-your-automation-potentialwitha-free-framework-assessment') 

  cy.xpath("(//input[@id='cu-form-control-0'])[1]").type('Name');
  cy.get('#cu-form-control-1').type('murugan@qaoncloud.com')
  cy.get('#cu-form-control-2').type('QA')
  cy.get('#cu-form-control-3').type('qaoncloud');
  cy.get('#cu-form-control-2').click();
  cy.wait(500);
//   cy.get('.cu-select-selection__text').click();
//   cy.wait(500);
//   cy.get(':nth-child(5) > .cu-select-option > .cu-custom-fields__dropdown-item').click();
//   cy.wait(500);
//   cy.xpath("(//button[@class='cu-form__submit-button ng-tns-c448125222-0'])[1]").type('test');
//   cy.wait(500);
//   cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
})
})