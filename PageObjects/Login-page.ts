import { expect, Locator, Page } from "@playwright/test";
export default class Loginpage {
    readonly page: Page;
    readonly userNameLocator: Locator;
    passwordLocator: Locator;
    rememberMeLocator: Locator;
    loginButtonLocator: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.userNameLocator = page.locator('//input[@title="Email or Username"]');
        this.passwordLocator = page.locator('//input[@title="Password"]');
        this.rememberMeLocator = page.locator('[class="mat-checkbox-label"]');
        this.loginButtonLocator = page.locator('//button[@title="Sign in"]');
        


    }

    async gotoLoginPage(url:string){
        await this.page.waitForLoadState('load');
        await this.page.goto(url);
        this.page.waitForLoadState("load");
    }
    async loginToApp(username: string, password: string) {
        await this.userNameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.rememberMeLocator.check();
        await this.loginButtonLocator.click();
        this.page.waitForLoadState("load");
    }
    
}
