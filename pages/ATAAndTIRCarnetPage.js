const { I } = inject();

class ATAAndTIRCarnetPage  {
  constructor() {
      // page locators
      this.locators = {
        yesIHaveButton: '//input[@id="temporaryMovementHaveATA"]',
        yesNeedStampButton: '//input[@id="temporaryMovementHaveATA-2"]',
        noButton: '//input[@id="temporaryMovementHaveATA-3"]'
      };
      I.see('Are you moving the goods with an ATA or TIR carnet?');

  }

  selectYes() {
    
    I.click(this.locators.yesIHaveButton);
  }

  selectYesNeedStamp() {
    
    I.click(this.locators.yesNeedStampButton);
  }

  selectNo(){
    I.click(this.locators.noButton);

  }
}

module.exports = ATAAndTIRCarnetPage;