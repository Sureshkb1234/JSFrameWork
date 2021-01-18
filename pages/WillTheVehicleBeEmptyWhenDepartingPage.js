const { I } = inject();

class WillTheVehicleBeEmptyWhenDepartingPage  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="vehicleEmpty"]',
        noButton: '//input[@id="vehicleEmpty-2"]'
      };
      I.see('Will the vehicle be empty when departing Great Britain?');

  }

  selectYes() {
    
    I.click(this.locators.yesButton);
  }

  selectNo(){
    I.click(this.locators.noButton);

  }
}

module.exports = WillTheVehicleBeEmptyWhenDepartingPage;