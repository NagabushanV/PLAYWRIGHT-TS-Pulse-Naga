import { expect, Locator, Page } from "@playwright/test";
export default class Homepage {
    readonly page: Page;
    DashboardtitleLocator: Locator;
    menuLocator: Locator;
    clickclaimsDeliveryLocator: Locator;
    clickclaimsHistoryLocator: Locator;
    clickeligibalityLocator: Locator;


    constructor(page: Page) {
        this.page = page;
        this.DashboardtitleLocator = page.locator('//a[@title="Claims Dashboard"]');
        this.menuLocator = page.locator('[data-mat-icon-name="icon-menu-grid"]');
        this.clickclaimsDeliveryLocator = page.locator('(//div[@class="menu_card_content"])[3]');
        this.clickclaimsHistoryLocator = page.locator('(//div[@class="menu_card_content"])[4]');
        this.clickeligibalityLocator = page.locator('(//div[@class="menu_card_content"])[2]');
    }


    async verifyhomepage() {
        await expect (this.DashboardtitleLocator).toBeTruthy();
  }
  async ClickOnmenuBtn(){
    await this.menuLocator.click();
  }
  async ClickOnclaimDelivertBtn(){
    await this.clickclaimsDeliveryLocator.click();
  }

  async ClickOnclaimhistoryBtn(){
    await this.clickclaimsHistoryLocator.click();
  }
  async ClickOneligibilityBtn(){
    await this.clickclaimsHistoryLocator.click();
  }
}
