const { I } = inject();

class CatchCertificate  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="fisheryCertificate"]',
        noButton: '//input[@id="fisheryCertificate-2"]',
        noIDontRequire: '//label[@for="fisheryCertificate-3"]',
      };
      I.see('Has a catch certificate been validated for all fisheries products that require one?');

  }

  clickYes() {
    
    I.click(this.locators.yesButton);
  }

  clickNo(){
    I.click(this.locators.noButton);

  }

  clickNoIDontRequire(){
    I.click(this.locators.noIDontRequire); 
  }
}

module.exports = CatchCertificate;