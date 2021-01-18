const { I } = inject();

class CheckYourAnswersPage  {
  constructor() {
      // page locators
      this.locators = {
        acceptAndSendBtn: '//button[contains(text(),"Accept and send")]'
      };
      I.see('Check your answers before sending your application');
  }

  clickAcceptAndSend() {
    I.click(this.locators.acceptAndSendBtn);
  }

}

module.exports = CheckYourAnswersPage;