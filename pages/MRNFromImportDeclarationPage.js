const { I } = inject();

class MRNFromImportDeclarationPage  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="customsDeclaration"]',
        noButton: '//input[@id="customsDeclaration-2"]'
      };
      I.see('Do you have an EU import document with a barcode for all goods carried?');

  }

  selectYes() {
    
    I.click(this.locators.yesButton);
  }

  selectNo(){
    I.click(this.locators.noButton);

  }
}

module.exports = MRNFromImportDeclarationPage;