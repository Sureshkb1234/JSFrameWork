const { I } = inject();

class HomePage  {

  constructor() {
    // page locators
    this.locators = {
      startButton: '//a[contains(text(),"Start")]'
     
    };
   // I.see('Get a Kent Access Permit');
    I.see('Check an HGV is ready to cross the border prototype');
    
  }

  clickStartBtn() {
  
  I.click(this.locators.startButton);
  }  

 
}

module.exports = HomePage;