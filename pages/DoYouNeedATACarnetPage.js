const { I } = inject();

class DoYouNeedATACarnetPage  {
  constructor() {
      // page locators
      this.locators = {
        noIdontNeedOneBtn: '//input[@id="temporaryMovementNeedATA"]',
        yesIHaveStampedOneBtn: '//input[@id="temporaryMovementNeedATA-2"]',
        yesNeedStampedBtn: '//input[@id="temporaryMovementNeedATA-3"]',
        yesDontHaveOneBtn: '//input[@id="temporaryMovementNeedATA-4"]'
      };
      I.see('Do you need an ATA Carnet because you are bringing some goods back?');

  }

  selectNoIDontNeedOne() {
    
    I.click(this.locators.noIdontNeedOneBtn);
  }

  selectYesIHaveStampedOne() {
    
    I.click(this.locators.yesIHaveStampedOneBtn);
  }
  selectYesButINeedGetStamped() {
    
    I.click(this.locators.yesNeedStampedBtn);
  }
  selectYesButIDontHaveOne() {
    
    I.click(this.locators.yesDontHaveOneBtn);
  }
}

module.exports = DoYouNeedATACarnetPage;