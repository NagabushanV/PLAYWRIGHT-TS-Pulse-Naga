import { expect, Locator, Page } from "@playwright/test";
export default class ClaimsDelivery {
    readonly page: Page;
    DashboardtitleLocator: Locator;
    menuLocator: Locator;
    clickclaimsDeliveryLocator: Locator;
    clickcalenderLoocator: Locator;
    datepickLocator: Locator;
    toggleButtonLocator: Locator;
    clickShowclaimsButtonLocator: Locator;
    verifyexpiredclaimsLocator: Locator;
    clickcalenderLocator: Locator;


    constructor(page: Page) {
        this.page = page;
        this.DashboardtitleLocator = page.locator('//a[@title="Claims Dashboard"]');
        this.menuLocator = page.locator('[data-mat-icon-name="icon-menu-grid"]');
        this.clickclaimsDeliveryLocator = page.locator('(//div[@class="menu_card_content"])[3]');
        this.clickcalenderLocator = page.locator('[data-mat-icon-name="icon-calendar"]');
        this.datepickLocator = page.locator('[aria-label="January 2, 2024"]');
        this.toggleButtonLocator = page.locator('[class="mat-slide-toggle-content"]');
        this.clickShowclaimsButtonLocator = page.locator('//span[@title="Show Claims"]');
        this.verifyexpiredclaimsLocator = page.locator("//h3[.='Expired Uninvoiced Claims']");
    }


    async verifyhomepage() {
        await expect (this.DashboardtitleLocator).toBeTruthy();
  }
  async ClickOnmenuBtn(){
    await this.menuLocator.click();
  }
  async datepicker(){
    await this.clickcalenderLocator.click();
    await this.datepickLocator.click();
    await this.page.waitForLoadState('load');

  }
  async clickonToggleBtn(){
    await this.toggleButtonLocator.click();
  }

  async clickonshowclaimsBtn(){
    await this.clickShowclaimsButtonLocator.click();
  }
  async verifyexpiredclaims(){
    await expect (this.verifyexpiredclaimsLocator).toBeTruthy();
  }
}