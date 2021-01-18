const { I } = inject();

class VehicleCarryingPostPage {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="postInVehicle"]',
        noButton: '//input[@id="postInVehicle-2"]'
      };
      I.see('Is the vehicle only carrying postal mail');

  }

  selectYes() {
    
    I.click(this.locators.yesButton);
  }

  selectNo(){
    I.click(this.locators.noButton);

  }
}

module.exports = VehicleCarryingPostPage;