import { test } from '@playwright/test';
import Loginpage from '../PageObjects/Login-page';
import Homepage from '../PageObjects/HomePage/Home-page';
import PendingClaims from '../PageObjects/Pending-claims/Pending-claims';
import data from "../Testdata/Login.json";
import ClaimsDelivery from '../PageObjects/claims-Delivery/claims-delivery';
import ClaimsHistory from '../PageObjects/claims-history/claims-history';
import Eligibility from '../PageObjects/Eligibility/Eligibility.page';





test("TC_02_Dashboard_Pending_To verify the Search Box With Valid Data on Pending Claims section", async ({ page }) => {
    const loginPage: Loginpage = new Loginpage(page);
    const homepage: Homepage = new Homepage(page);
    const pendingclaims: PendingClaims = new PendingClaims(page);
    const claimsdeliverypage: ClaimsDelivery= new ClaimsDelivery(page)
    const Claimshistory: ClaimsHistory = new ClaimsHistory(page);
    

    await loginPage.gotoLoginPage(data['TC-Login-2'].url);

    await loginPage.loginToApp(data['TC-Login-2'].username,  data['TC-Login-2'].password);

    await homepage.verifyhomepage();

    await pendingclaims.ClickOnPendingclaims();

    await pendingclaims.Verifysearchbar();

    await pendingclaims.Setsearchbox(data['TC-Login-2'].searchvalue);

    await pendingclaims.ClickOnSearchButton();



    

});
test("TC_003_ClaimsDelivery_CreateBatch_To verify the Show Only Expired Bills behavior.", async ({ page }) => {
    const loginPage: Loginpage = new Loginpage(page);
    const homepage: Homepage = new Homepage(page);
    const pendingclaims: PendingClaims = new PendingClaims(page);
    const claimsdeliverypage: ClaimsDelivery= new ClaimsDelivery(page)

    await loginPage.gotoLoginPage(data['TC-Login-2'].url);

    await loginPage.loginToApp(data['TC-Login-2'].username,  data['TC-Login-2'].password);

    await homepage.verifyhomepage();

    await homepage.ClickOnmenuBtn();

    await homepage.ClickOnclaimDelivertBtn();

    await claimsdeliverypage.datepicker();

    await claimsdeliverypage.clickonToggleBtn();

    await claimsdeliverypage.clickonshowclaimsBtn();

    await claimsdeliverypage.verifyexpiredclaims();

});

test("TC_004_Verify that the user is able to perform Batch search using 'From Submission Date' & 'To Submission Date' - Paper.", async ({ page }) => {
    const loginPage: Loginpage = new Loginpage(page);
    const homepage: Homepage = new Homepage(page);
    const pendingclaims: PendingClaims = new PendingClaims(page);
    const claimsdeliverypage: ClaimsDelivery= new ClaimsDelivery(page)
    const Claimshistory: ClaimsHistory = new ClaimsHistory(page);

    await loginPage.gotoLoginPage(data['TC-Login-4'].url);

    await loginPage.loginToApp(data['TC-Login-4'].username,  data['TC-Login-4'].password);

    await homepage.verifyhomepage();

    await homepage.ClickOnmenuBtn();

    await homepage.ClickOnclaimhistoryBtn();

    await Claimshistory.ClickonbatchsearchBtn();

    await Claimshistory.setFromdate(data['TC-Login-4'].fromdate);

    await Claimshistory.settodate(data['TC-Login-4'].todate);

    await Claimshistory.clickonsearchBtn();

    await Claimshistory.verifybatchsearch();

});


test("TC_005_Verify the eligibility information for an Eligible beneficiary.", async ({ page }) => {
    const loginPage: Loginpage = new Loginpage(page);
    const homepage: Homepage = new Homepage(page);
    const pendingclaims: PendingClaims = new PendingClaims(page);
    const claimsdeliverypage: ClaimsDelivery= new ClaimsDelivery(page)
    const Claimshistory: ClaimsHistory = new ClaimsHistory(page);
    const eligibility: Eligibility = new Eligibility(page)

    await loginPage.gotoLoginPage(data['TC-Login-4'].url);

    await loginPage.loginToApp(data['TC-Login-4'].username,  data['TC-Login-4'].password);

    await homepage.verifyhomepage();

    await homepage.ClickOnmenuBtn();

    await homepage.ClickOneligibilityBtn();

    await eligibility.setcardnumber(data['TC-Login-5'].cardnumber);

    await eligibility.selecttype();

    await eligibility.clickoncheckeligibilityBtn();

    await eligibility.verifyEligibility();

});