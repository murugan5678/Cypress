
Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
  import LoginPage from '../pageObjects/LoginPage.cy'

  
  describe('Pageobject', function(){
    before(function(){
      cy.fixture('example').then(function(data){
          Cypress.data=data
      }      
      )
  })
//login functionality    
    it('login', function(){
   const lp=new LoginPage()
   lp.visit()
   lp.enterEmail(Cypress.data.adname)
   lp.enterPassword(Cypress.data.adpassword)
   lp.submit()
   cy.title().should('contain', 'Dashboard')
    })

//to check the text contains in flipkart
    it('contains text Login in flipkart', function(){
        const loginPage=new LoginPage()
        loginPage.flipkartUrl()
        loginPage.flipkartLogin()
        loginPage.flipkartLogin().should('contain', Cypress.data.login)
        loginPage.screenshot()
    
    } )
//to check the equal value  

  it('equals in amazon',function(){
    const loginPage=new LoginPage()
    loginPage.amazonUrl()
    loginPage.amazonPay().click()
    loginPage.amazonPay().invoke('text').should('equals', Cypress.data.amazonPay)
    loginPage.screenshot()

  })
  
  it('have class', function(){
    const loginPage=new LoginPage()
    loginPage.flipkartUrl()
    loginPage.flipkartImage().click().should('be.visible')
  

  })
  //shoauld have vlaue
     it('should have value', function(){
      const loginPage=new LoginPage()
      loginPage.flipkartUrl()
      loginPage.flipkartsearch('iphone')
      loginPage.flipkartSearchBtn()
      loginPage.selectValue(1).should('have.value', Cypress.data.min)
      loginPage.screenshot()


    } )
    
// alert
it('alert and get text', function(){
  const loginPage=new LoginPage()
  loginPage.automationSite()
  loginPage.alert('cypress', Cypress.data.alertText)
})


  })