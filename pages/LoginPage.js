
const { I } = inject();

class LoginPage  {
  constructor() {
      // page locators
      this.locators = {
        username: "//input[@id='user_id']",
        password: '//input[@id="password"]',
        signIn: '//button[@id="continue"]'
       
      };
  }

  signInToSF(username,password) {
    
    I.fillField(this.locators.username, '92 93 38 96 82 58');
    I.fillField(this.locators.password, 'AMemorableword123');
    I.click(this.locators.signIn);
  }
  
}

module.exports = LoginPage;