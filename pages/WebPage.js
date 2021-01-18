const { I } = inject();

class WebPage  {
  constructor() {
      // page locators
      this.locators = {
        continueButton: '//button[contains(text(),"Continue")]'
      };
     
  }

  validateText(text) {
    
    I.see(text);
  }

  clickContinue(){

      I.click(this.locators.continueButton)
  }
}

module.exports = WebPage;