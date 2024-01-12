import { _baseTest, expect, Locator, Page } from "@playwright/test";
export default class PendingClaims {
    readonly page: Page;
    clickpendingclaimsLocator: Locator;
    searchbarLocator: Locator;
    clicksearchbuttonLocator: Locator;


    constructor(page: Page) {
        this.page = page;
        this.clickpendingclaimsLocator = page.locator('[title="Pending Claims"]');
        this.searchbarLocator = page.locator('//input[@title="Search"]');
        this.clicksearchbuttonLocator = page.locator('[data-mat-icon-name="icon-search"]');
    }


    async ClickOnPendingclaims(){
        await this.clickpendingclaimsLocator.click();
    }
    async Verifysearchbar(){
        await expect (this.searchbarLocator).toBeTruthy();
    }
    async Setsearchbox(searchvalue: string){
        await this.searchbarLocator.fill(searchvalue);
    }
    async ClickOnSearchButton(){
        await this.clicksearchbuttonLocator.click();
    }
}