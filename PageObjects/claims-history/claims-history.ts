import { expect, Locator, Page } from "@playwright/test";
export default class ClaimsHistory {
    readonly page: Page;
    
   
    clickcalenderLoocator: Locator;
    datepickLocator: Locator;
    clickcalenderLocator: Locator;
    BatchSearchButtonLocator: Locator;
    setfromdateLocator: Locator;
    clicksearchButtonLocator: Locator;
    settodateLocator: Locator;
    verifybachsearchLocator: Locator;
   


    constructor(page: Page) {
        this.page = page;
       
        this.clickcalenderLocator = page.locator('[data-mat-icon-name="icon-calendar"]');
        this.datepickLocator = page.locator('[aria-label="January 2, 2024"]');

        this.BatchSearchButtonLocator = page.locator("//span[.='Batch Search']");

        this.setfromdateLocator = page.locator('//input[@title="From Submission Date"]');
        this.settodateLocator = page.locator('//input[@title="To Submission Date"]');

        this.clicksearchButtonLocator = page.locator('(//span[@title="Search"])[1]');
        this.verifybachsearchLocator = page.locator('//h3[@title="Batch Search"]');
       
    }


    
  async datepicker(){
    await this.clickcalenderLocator.click();
    await this.datepickLocator.click();
    await this.page.waitForLoadState('load');

  }
  async ClickonbatchsearchBtn(){
    await this.BatchSearchButtonLocator.click();
  }
  async setFromdate(fromdate: string){
    await this.setfromdateLocator.fill(fromdate)
  }

  async settodate(todate: string){
    await this.settodateLocator.fill(todate)
  }
  async clickonsearchBtn(){
    await this.clicksearchButtonLocator.click();
  }
  async verifybatchsearch(){
    await expect(this.verifybachsearchLocator).toBeTruthy();
  }

}