import { test } from '@playwright/test';
import Loginpage from '../PageObjects/Login-page';
import Homepage from '../PageObjects/HomePage/Home-page';
import data from "../Testdata/Login.json";


test("TC_005_Login_Access_Verify User Can Login To IRISPULSE WebPortal.", async ({ page }) => {
    const loginPage: Loginpage = new Loginpage(page);
    const homepage: Homepage = new Homepage(page)

    await loginPage.gotoLoginPage(data['TC-Login-1'].url);

    await loginPage.loginToApp(data['TC-Login-1'].username,  data['TC-Login-1'].password);

    await homepage.verifyhomepage();

    

});

test("TC_011_Dashboard_Pending_To verify the Search Box With Valid Data on Pending Claims section", async ({ page }) => {
    const loginPage: Loginpage = new Loginpage(page);
    const homepage: Homepage = new Homepage(page)

    await loginPage.gotoLoginPage(data['TC-Login-1'].url);

    await loginPage.loginToApp(data['TC-Login-1'].username,  data['TC-Login-1'].password);

    await homepage.verifyhomepage();

    

});
