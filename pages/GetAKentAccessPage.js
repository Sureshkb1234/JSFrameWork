const { I } = inject();

class GetAKentAcccessPage  {
  constructor() {
    // page locators
    this.locators = {
      getAKAPButton: '//a[contains(text(),"Get a Kent Access Permit")]',
      checkAnHgvLink: '(//a[contains(text(),"Check an HGV is ready to cross the border")])[2]'
     
    };
    I.see('Check an HGV is ready to cross the border');
    I.seeElement(this.locators.checkAnHgvLink);
}

clickGetAKentAccessPermit() {
  
  I.click(this.locators.getAKAPButton);
}

clickCheckAnHGVIsReady(){

  I.click(this.locators.checkAnHgvLink);
}


}

module.exports = GetAKentAcccessPage;