const { I } = inject();

class AreYouTravellingToOfficeOfDeparturePage  {
  constructor() {
      // page locators
      this.locators = {
        yesButton: '//input[@id="customsProcedureUsingTransit"]',
        noButton: '//input[@id="customsProcedureUsingTransit-2"]'
      };
      I.see('Are you travelling to an Office of Departure or Authorised Consignor to get a TAD?');

  }

  selectYes() {
    
    I.click(this.locators.yesButton);
  }

  selectNo(){
    I.click(this.locators.noButton);

  }
}

module.exports = AreYouTravellingToOfficeOfDeparturePage;