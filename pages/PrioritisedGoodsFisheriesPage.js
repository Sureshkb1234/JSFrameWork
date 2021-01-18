const { I } = inject();

class PrioritisedGoodsFishery  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="prioritisedGoodsFish"]',
        noButton: '//input[@id="prioritisedGoodsFish-2"]'
      };
      I.see('Is the vehicle carrying exclusively live and/or fresh seafood products?');

  }

  clickYes() {
    
    I.click(this.locators.yesButton);
  }

  clickNo(){
    I.click(this.locators.noButton);

  }
  
}

module.exports = PrioritisedGoodsFishery;