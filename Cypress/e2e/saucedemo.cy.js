import loginPage from '../support/saucedemo/loginPage';
import selectProduct from '..//support/saucedemo/selectProduct';
import saucedemoCredentials from '../fixtures/saucedemoCredentials.json'
import 'cypress-xpath';

describe('saucedemo webpage', ()=>{
    it('saucedemo automation', ()=>{
       loginPage.visit(saucedemoCredentials.saucedemourl);
       loginPage.login(saucedemoCredentials.username,saucedemoCredentials.password);
       selectProduct.selectProduct(saucedemoCredentials.firstname, saucedemoCredentials.lastname,saucedemoCredentials.postalcode);
    })
})