const { I } = inject();

class PrioritisedGoodsAnimals  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="prioritisedGoodsChicks"]',
        noButton: '//input[@id="prioritisedGoodsChicks-2"]'
      };
      I.see('Is the vehicle carrying exclusively poultry under 72 hours old?');

  }

  clickYes() {
    
    I.click(this.locators.yesButton);
  }

  clickNo(){
    I.click(this.locators.noButton);

  }
  
}

module.exports = PrioritisedGoodsAnimals;