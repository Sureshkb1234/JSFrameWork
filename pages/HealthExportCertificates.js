const { I } = inject();

class HealthExportCertificate  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="healthCertificate"]',
        noButton: '//input[@id="healthCertificate-2"]',
        noIamCarryingAnotherDocument: '//label[@for="healthCertificate-3"]',
      };
      I.see('Do you have the necessary Export Health Certificates (EHCs) stamped and ready for inspection?');

  }

  clickYes() {
    
    I.click(this.locators.yesButton);
  }

  clickNo(){
    I.click(this.locators.noButton);

  }

  clickNoIamCarryingAnotherDoc(){
    I.click(this.locators.noIamCarryingAnotherDocument); 
  }
}

module.exports = HealthExportCertificate;