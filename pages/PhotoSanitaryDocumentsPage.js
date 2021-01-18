//Do you have all necessary Phytosanitary documents for regulated plants/plant products?
const { I } = inject();

class PhytoSanitaryDocuments  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="phytosanitaryCertificate"]',
        noButton: '//input[@id="phytosanitaryCertificate-2"]',
        notApplicableButton: '//input[@id="phytosanitaryCertificate-3"]'
      };
      I.see('Do you have all necessary Phytosanitary documents for regulated plants/plant products?');

  }

  clickYes() {
    
    I.click(this.locators.yesButton);
  }

  clickNo(){
    I.click(this.locators.noButton);

  }
  clickNA(){
      I.click(this.locators.notApplicableButton);
  }
  
}

module.exports = PhytoSanitaryDocuments;