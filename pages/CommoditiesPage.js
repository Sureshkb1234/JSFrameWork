const { I } = inject();

class CommoditiesPage  {
  constructor() {
      // page locators
      this.locators = {
        liveAnimalsBtn: '//input[@id="liveAnimals"]',
        animalProductsBtn: '//input[@id="poao"]',
        fisheryProductsBtn: '//input[@id="fisheryProducts"]',
        plantBasedProductsBtn: '//input[@id="plantBasedProducts"]',
        otherRestrictedGoodsBtn: '//input[@id="strategicProducts"]',
        noneOfTheAboveBtn: '//input[@id="otherProducts"]'
      };
      I.see('Is the vehicle carrying any of the following goods?');
      I.see('You will need to have a special licence or certificate to export some types of goods from the UK. Select all that apply')
  }

  selectLiveAnimals() {
    I.click(this.locators.liveAnimalsBtn);
  }

  selectAnimalProducts() {
    I.click(this.locators.animalProductsBtn);
  }
  selectFisheryProducts() {
    I.click(this.locators.fisheryProductsBtn);
  }
  selectPlantBasedProducts() {
    I.click(this.locators.plantBasedProductsBtn);
  }
  selectOtherRestrictedGoods() {
    I.click(this.locators.otherRestrictedGoodsBtn);
  }

  selectNoneOfTheAbove() {
    I.click(this.locators.noneOfTheAboveBtn);
  }
}

module.exports = CommoditiesPage;