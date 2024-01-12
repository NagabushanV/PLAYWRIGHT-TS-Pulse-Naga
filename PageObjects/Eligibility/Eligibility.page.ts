import { expect, Locator, Page } from "@playwright/test";
export default class Eligibility {
    readonly page: Page;
    setcardnumberLocator: Locator;
    selecttypeLocator: Locator;
    clickcheckEligibilityButton: Locator;
    verifytheEligibilityLocator: Locator;
    
   
    


    constructor(page: Page) {
        this.page = page;
        this.setcardnumberLocator = page.locator('//input[@title="Card Number"]');
        this.selecttypeLocator = page.locator('[id="mat-option-645"]');
        this.clickcheckEligibilityButton = page.locator('//button[@title="Check Eligibility"]');
        this.verifytheEligibilityLocator = page.locator("//h3[.='Not Eligible']");
       
    }


    
  async setcardnumber(cardnumber: string){
    await this.setcardnumberLocator.fill(cardnumber)

  }
  async selecttype(){
    await this.selecttypeLocator.click();
  }
  async clickoncheckeligibilityBtn(){
    await this.clickcheckEligibilityButton.click();
  }
  async verifyEligibility(){
    await expect(this.verifytheEligibilityLocator).toBeTruthy();
  }

  
  

}