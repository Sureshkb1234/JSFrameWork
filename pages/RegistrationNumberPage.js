const { I } = inject();

class RegistrationNumberPage  {
  constructor() {
      // page locators
      this.locators = {
        vrnTxtField: '//input[@id="vrn"]'
      };
      I.see('What is the registration number on the front plate of the vehicle?');

  }

  enterRegistrationNumber(number) {
    
    I.fillField(this.locators.vrnTxtField, number);
  }
  
}

module.exports = RegistrationNumberPage;