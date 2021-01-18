const { I } = inject();
var WebPage = require('./pages/WebPage');
var LoginPage = require('./pages/LoginPage');
var HomePage= require('./Pages/HomePage');
var DepartingPortPage = require('./Pages/DepartingPortPage');
var DateArrivalAtPortPage = require('./pages/DateArrivalAtPortPage');
var MRNFromImportDeclarationPage = require('./pages/MRNFromImportDeclarationPage');
var DoYouNeedATACarnetPage = require('./pages/DoYouNeedATACarnetPage');
var CommoditiesPage = require('./pages/CommoditiesPage');
var RegistrationNumberPage = require('./pages/RegistrationNumberPage');
var CheckYourAnswersPage = require('./pages/CheckYourAnswersPage');
var AreYouTravellingToOfficeOfDeparturePage =require('./pages/AreYouTravellingToOfficeOfDeparturePage');
var WillTheVehicleBeEmptyWhenDepartingPage = require('./pages/WillTheVehicleBeEmptyWhenDepartingPage');
var GetAKentAcccessPage = require('./pages/GetAKentAccessPage');
var HealthExportCertificate = require('./pages/HealthExportCertificates');
var EmailPage = require('./pages/EmailPage');
var CatchCertificate = require('./pages/CatchCertificate');
var AnimalCertificate = require('./pages/AnimalCertificatePage');
var CarringPost = require('./pages/VehicleCarryingPostPage');
var ATAAndTIRCarnet = require('./pages/ATAAndTIRCarnetPage');
var PrioritisedGoodsAnimals = require('./pages/PrioritisedGoodsLiveAnimalsPage');
var PrioritisedGoodsFishery = require('./pages/PrioritisedGoodsFisheriesPage');
var PhytoSanitaryDocuments = require('./pages/PhotoSanitaryDocumentsPage');



const testUrl ='http://localhost:3000/start-kent-access-permit';


Given('I am on home page', () => {
    I.amOnPage(testUrl);
   
    
});

Given(/^I see "([^"]*)" in title$/, (key) => {
    new WebPage().validateText(key);
});

Given('I click Go To Beta Service button in HomePage', () => {
    I.click('//*[@id="accept-all-cookies"]');
    I.click('//*[@id="hide-cookies-accepted"]');
    new HomePage().clickStartBtn();
});

Given('I click Get Access Permit button in Get A Kent Access Page', () => {
    //Get a KAP
    new GetAKentAcccessPage().clickGetAKentAccessPermit();
});

Given(/^I see "([^"]*)"$/, async (key) => {
    new WebPage().validateText(key);
});

Then(/^I see "([^"]*)"$/, async (key) => {
    new WebPage().validateText(key);
});

Given(/^I sign in as ("[^"]*)"$/, async (user) => {
    
    const userEnvVar = user.toUpperCase().split("-").join("_");
    const username = process.env[userEnvVar.concat('_USERNAME')];
    const password = process.env[userEnvVar.concat('_PASSWORD')];

    
    new LoginPage().signInToSF(username,password);
  });

  When(/^I see "([^"]*)"$/, async (key) => {
    new WebPage().validateText(key);
  });



When(/^I check "([^"]*)" option in Departing Port In GB$/,async (key) =>{
    if(0 == key.localeCompare('Port of Dover or Eurotunnel')){
        new DepartingPortPage().selectDoverOrEuroTunnel();

    }
    else if (0 == key.localeCompare('Other ports in Great Britain')){
        new DepartingPortPage().selecOtherPort();
    }
});

When(/^I enter "([^"]*)" day, "([^"]*)" month, "([^"]*)" year of "([^"]*)" date and "([^"]*)" as time in Date of Arrival at Port$/,async (day,month,year,dateType,time) =>{
    let dateArrivalAtPortPage = new DateArrivalAtPortPage(dateType);
    
    
    if(0 == day.localeCompare('valid')){
        dateArrivalAtPortPage.enterDay();
    }
    if(0 == month.localeCompare('valid')){
        dateArrivalAtPortPage.enterMonth();
    }
    if(0 == year.localeCompare('valid')){
        dateArrivalAtPortPage.enterYear();
    }
    
        dateArrivalAtPortPage.selectTime(time);
    
    

});

When(/^I click Continue button$/, async () => {
    new WebPage().clickContinue();
  });


  When(/^I enter "([^"]*)" as Email$/, async (email) =>{
    new EmailPage().enterEmail(email);
  });

  
When(/^I select the response as "([^"]*)" as user is displayed with the question Do you have an MRN from an import declaration or TAD$/, async (response) => {
    var mrnFromImportDeclarationPage = new MRNFromImportDeclarationPage();
    if(0 == response.localeCompare('Yes')){
        mrnFromImportDeclarationPage.selectYes();
    }
    else if(0 == response.localeCompare('No')){
        mrnFromImportDeclarationPage.selectNo(); 
    }
  });

When(/^I select the response as "([^"]*)" as user is displayed with the question Do you need an ATA Carnet because you are bringing some goods back$/,async (response) => {
      var doYouNeedATACarnetPage = new DoYouNeedATACarnetPage();
      if(0 == response.localeCompare('No, I dont need one')){
        doYouNeedATACarnetPage.selectNoIDontNeedOne();
      }
      else if(0 == response.localeCompare('Yes, I have a stamped one')){
        doYouNeedATACarnetPage.selectYesIHaveStampedOne();
      }
      else if(0 == response.localeCompare('Yes, but I need to get it stamped')){
        doYouNeedATACarnetPage.selectYesButINeedGetStamped();
      }
      else{
        doYouNeedATACarnetPage.selectYesButIDontHaveOne();
      }
  });

  When(/^I select the response as "([^"]*)" as user is displayed with the question Is the vehicle carrying any of the following goods$/,async (response) => {
    var commoditiesPage = new CommoditiesPage();
    if(0 == response.localeCompare('None of the above')){
        commoditiesPage.selectNoneOfTheAbove();
    }
    if(0 == response.localeCompare('Live animals')){
        commoditiesPage.selectLiveAnimals();
    }
    if(0 == response.localeCompare('Animal products')){
        commoditiesPage.selectAnimalProducts();
    }
    if(0 == response.localeCompare('Fishery products')){
        commoditiesPage.selectFisheryProducts();
    }
    if(0 == response.localeCompare('Plant and plant based products')){
        commoditiesPage.selectPlantBasedProducts();
    }
    if(0 == response.localeCompare('Other restricted goods')){
        commoditiesPage.selectOtherRestrictedGoods();
    }
});

When(/^I enter the cab registration number as user is displayed with the question What is the cab's registration number$/,async () => {
   new RegistrationNumberPage().enterRegistrationNumber('CV12321'); 
});

When(/^I enter the cab registration number as "([^"]*)" user is displayed with the question What is the cab's registration number$/,async (vrn) => {
    new RegistrationNumberPage().enterRegistrationNumber(vrn); 
 });

When(/^I click "([^"]*)" button in check your answers page$/,async () => {
   new CheckYourAnswersPage().clickAcceptAndSend();
 });

 Then(/^the user to be displayed with screen saying "([^"]*)"$/,async(result) =>{
    if(0 == result.localeCompare('Permit issued')){
        new WebPage().validateText('Permit issued');
    } else if(0 == result.localeCompare('Conditional permit issued')){
        new WebPage().validateText('Conditional permit issued');
    }else{
        new WebPage().validateText('No permit issued');
    }
 });


When(/^I select the response as "([^"]*)" as user is displayed with the question Are you travelling to an Office of Departure or Authorised Consignor to get a TAD$/, async(response) => {
    var areYouTravellingToOfficeOfDeparturePage = new AreYouTravellingToOfficeOfDeparturePage();
    if(0 == response.localeCompare('Yes')){
        areYouTravellingToOfficeOfDeparturePage.selectYes();
    }
    else if(0 == response.localeCompare('No')){
        areYouTravellingToOfficeOfDeparturePage.selectNo(); 
    }
 });


When(/^I select the response as "([^"]*)" as user is displayed with the question Will the vehicle be empty when departing Great Britain$/, async(response) => {
    var willTheVehicleBeEmptyWhenDepartingPage = new WillTheVehicleBeEmptyWhenDepartingPage();
    if(0 == response.localeCompare('Yes')){
        willTheVehicleBeEmptyWhenDepartingPage.selectYes();
    }
    else if(0 == response.localeCompare('No')){
        willTheVehicleBeEmptyWhenDepartingPage.selectNo(); 
    }
});

Then('The permit start date must be a date no later than', async()=>{
    let dateArrivalAtPortPage = new DateArrivalAtPortPage('greater than 28');
    dateArrivalAtPortPage.validateErrorMessageForDateGreaterThan28();


});

When(/^I select the response as "([^"]*)" as user is displayed with the question Do you have the necessary Export Health Certificates$/, async(response) => {   
    var healthExportCertificate = new HealthExportCertificate();
    if(0 == response.localeCompare('Yes')){
        healthExportCertificate.clickYes();
    }
    else if(0 == response.localeCompare('No')){
        healthExportCertificate.clickNo(); 
    }else{
        healthExportCertificate.clickNoIamCarryingAnotherDoc();
    }
});


When(/^I select the response as "([^"]*)" as user is displayed with the question Do you have catch certificate$/, async(response) => {   
    var catchCertificate = new CatchCertificate();
    if(0 == response.localeCompare('Yes')){
        catchCertificate.clickYes();
    }
    else if(0 == response.localeCompare('No')){
        catchCertificate.clickNo(); 
    }else if(0 == response.localeCompare('No I dont require')){
        catchCertificate.clickNoIDontRequire();
    }
});

When(/^I select the response as "([^"]*)" as user is displayed with the question Do you have Animal Transport certificate$/, async(response) => {   
    var animalCertificate = new AnimalCertificate();
    if(0 == response.localeCompare('Yes')){
        animalCertificate.clickYes();
    }
    else if(0 == response.localeCompare('No')){
        animalCertificate.clickNo(); 
    }
});

When(/^I select the response as "([^"]*)" as user is displayed with the question Is the vehicle only carrying postal mail$/, async(response) => {   
    var carringPost = new CarringPost();
    if(0 == response.localeCompare('Yes')){
        carringPost.selectYes();
    }
    else if(0 == response.localeCompare('No')){
        carringPost.selectNo(); 
    }
});

When(/^I select the response as "([^"]*)" as user is displayed with the question Are you moving the goods with an ATA or TIR carnet$/, async(response) => {   
    var ataAndTIRCarnet = new ATAAndTIRCarnet();
    if(0 == response.localeCompare('Yes, I have a stamped one')){
        ataAndTIRCarnet.selectYes();
    }
    else if(0 == response.localeCompare('No')){
        ataAndTIRCarnet.selectNo(); 
    }else if(0 == response.localeCompare('Yes, but I need to get it stamped')) {
        ataAndTIRCarnet.selectYesNeedStamp(); 
    }
});

When(/^I select the response as "([^"]*)" as user is displayed with the question Is the vehicle carrying exclusively poultry under 72 hours old$/, async(response) => {   
    var prioritisedGoodsAnimals = new PrioritisedGoodsAnimals();
    if(0 == response.localeCompare('Yes')){
        prioritisedGoodsAnimals.clickYes();
    }
    else if(0 == response.localeCompare('No')){
        prioritisedGoodsAnimals.clickNo(); 
    }
});

When(/^I select the response as "([^"]*)" as user is displayed with the question Is the vehicle carrying exclusively live and or fresh seafood products$/, async(response) => {   
    var prioritisedGoodsFishery = new PrioritisedGoodsFishery();
    if(0 == response.localeCompare('Yes')){
        prioritisedGoodsFishery.clickYes();
    }
    else if(0 == response.localeCompare('No')){
        prioritisedGoodsFishery.clickNo(); 
    }
});

When(/^I select the response as "([^"]*)" as user is displayed with the question Do you have all necessary Phytosanitary documents for regulated plants or plant products$/, async(response) => {   
    var phytoSanitaryDocuments = new PhytoSanitaryDocuments();
    if(0 == response.localeCompare('Yes')){
        phytoSanitaryDocuments.clickYes();
    }
    else if(0 == response.localeCompare('No')){
        phytoSanitaryDocuments.clickNo(); 
    }else if(0== response.localeCompare('NA')){
        phytoSanitaryDocuments.clickNA();
    }
});