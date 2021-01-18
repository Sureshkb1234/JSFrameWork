const { I } = inject();

class EmailPage  {
  constructor() {
      // page locators
      this.locators = {
        emailField: '//input[@id="emailAddress"]'
      };
      I.see('To which email address should we send the permit?');

  }

  enterEmail(email) {
    
    I.fillField(this.locators.emailField,email);
  }

}

module.exports = EmailPage;