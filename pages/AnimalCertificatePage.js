const { I } = inject();

class AnimalCertificate  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="liveAnimalsCertificate"]',
        noButton: '//input[@id="liveAnimalsCertificate-2"]'
      };
      I.see('Do you have an animal transport certificate or journey log (from both Great Britain and the European Union)?');

  }

  clickYes() {
    
    I.click(this.locators.yesButton);
  }

  clickNo(){
    I.click(this.locators.noButton);

  }

  
}

module.exports = AnimalCertificate;