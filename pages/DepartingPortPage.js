const { I } = inject();

class DepartingPortInGB  {
  constructor() {
      // page locators
      this.locators = {
        portOfDoverRadioButton: '//input[@id="port"]',
        otherPortRadioButton: '//input[@id="port-2"]',
      };
      I.see('Where are you departing Great Britain?');

  }

  selectDoverOrEuroTunnel() {
    
    I.click(this.locators.portOfDoverRadioButton);
  }

  selecOtherPort(){
    I.click(this.locators.otherPortRadioButton);

  }
}

module.exports = DepartingPortInGB;