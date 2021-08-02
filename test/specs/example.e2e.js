const { Console } = require("console");
const generatorOfString = require('..//pageobjects/generatorOfString');
const mainPage = require('..//pageobjects/main.page');
const signUp = require('..//pageobjects/signUP.page');
const signIn = require('..//pageobjects/signIn.page');
const githubIner = require('..//pageobjects/githubIner.page');
const passwordReset = require('..//pageobjects/paswordReset.page');
const pricing = require('..//pageobjects/pricing.page');
const createYourAccount = require('..//pageobjects/createYourAccount.page');
const expore = require('..//pageobjects/explore.page');
const topics = require('..//pageobjects/topics.page');
const enterprise = require('..//pageobjects/enterprise.page');
const picYourTrialPlan = require('..//pageobjects/picYourTrialPlan.page')
const createYourAccountForEnterprise = require('..//pageobjects/createYourAccountForEnterprise.page');
const createYourAccountForEnerpServer = require('..//pageobjects/createYourAccountForEnerpServer.page');
const careers = require('..//pageobjects/careers.page');
describe('My Final Home Project', () => {
    it('Test case 1 - checking the possibility of registration from the main page using the email field', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        (await mainPage.searchEmailFild).addValue(generatorOfString.reciveEmail);
        (await mainPage.searchButonSignUpForGitHub).click();
        await browser.pause(7000);
        (await signUp.searchButonContinueForEmail).click();
        (await signUp.searchPasswordFild).addValue(generatorOfString.reciveString);
        await browser.pause(7000);
        (await signUp.searchButonContinueForPassword).click();
        await browser.pause(6000);
        (await signUp.searchUsernameFild).addValue(generatorOfString.reciveString);
        await browser.pause(6000);
        (await signUp.searchButtonContinueForUsername).click();
        await browser.pause(5000);
        (await signUp.searchAnswerFild).addValue('y');
        await browser.pause(5000);
        (await signUp.searchButtonContinueForAnswer).click();
        await browser.pause(5000);
        let myUrl = await browser.getUrl(); 
        let partOfUrl = '';
        for (let i = 0; i < 26; i++){
           partOfUrl= partOfUrl + myUrl.charAt(i); 
        }
        if (partOfUrl === signUp.reciveAdresPage){
            console.log('correct site address');
        }else{
            console.log('incorrect site address');
        }
        (await signUp.searchCheckString).waitUntil(function() {
            return this.getText() == signUp.checkString; 
        }, {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        console.log((await signUp.searchCheckString).isDisplayed());
    });
    it('Test case 2 - registration of a new user through the button on the main screen', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        (await mainPage.serchButtonSignUp).click();
        await browser.pause(7000);
        (await signUp.searchEmaleFild).addValue(generatorOfString.reciveEmail);
        await browser.pause(3000);
        (await signUp.searchButonContinueForEmail).click();
        (await signUp.searchPasswordFild).addValue(generatorOfString.reciveString);
        await browser.pause(7000);
        (await signUp.searchButonContinueForPassword).click();
        await browser.pause(6000);
        (await signUp.searchUsernameFild).addValue(generatorOfString.reciveString);
        await browser.pause(6000);
        (await signUp.searchButtonContinueForUsername).click();
        await browser.pause(5000);
        (await signUp.searchAnswerFild).addValue('y');
        await browser.pause(5000);
        (await signUp.searchButtonContinueForAnswer).click();
        await browser.pause(5000);
        let myUrl = await browser.getUrl(); 
        let partOfUrl = '';
        for (let i = 0; i < 26; i++){
           partOfUrl= partOfUrl + myUrl.charAt(i); 
        }
        if (partOfUrl === signUp.reciveAdresPage){
            console.log('correct site address');
        }else{
            console.log('incorrect site address');
        }
        (await signUp.searchCheckString).waitUntil(function() {
            return this.getText() == signUp.checkString; 
        }, {
            timeout:5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
        console.log((await signUp.searchCheckString).isDisplayed());
    });
    it('Test case 3 - Checking the correctness of the input in the system with valid data', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        (await mainPage.searchButtonSignIn).click();
        await browser.pause(2000);
        (await signIn.searchUsernameFild).addValue(signIn.testEmail);
        (await signIn.searchPasswordFild).addValue(signIn.testPassword);
        (await signIn.searchSignInButton).click();
         await browser.pause(2000);
        if (await browser.getUrl() === githubIner.pageAdres){
            console.log('correct site address');
        }else {
            console.log('incorrect site address');
        }
        (await githubIner.acauntButton).click();
        await browser.pause(1000);
        console.log((await githubIner.searchNameAccaunt).isDisplayed());
        await browser.pause(1000);
        (await githubIner.searchSignOut).click();
        await browser.pause(3000);
    });
    it('Test case 4 - Checking if the password recovery page matches', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        (await mainPage.searchButtonSignIn).click();
        await browser.pause(2000);
        (await signIn.searchForgotPasswordReference).click();
        await browser.pause(2000);
        (await passwordReset.searchEmailFild).addValue(generatorOfString.reciveEmail);
        await browser.pause(5000);
        if ((await passwordReset.searchSendPasswordResetEmailButton).isClickable()){
            console.log('need to pass the test');
        }else{
            console.log('works without test');
        }
        let rezaltOfDisplayed = (await passwordReset.rearchResetYourPasswordText).isDisplayed();
         console.log((await rezaltOfDisplayed), 'rezalt of isDisplayed');
        if ( await browser.getUrl() == passwordReset.reciveURL){
            console.log('correct url');
        }else{
            console.log('not correct url');
        }
    });
    it('Test case 5 - Checking the display of pop-up tabs on the main page.', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(1000);
        (await mainPage.searchWhyGitHubText).moveTo();
        await browser.pause(5000);
        console.log((await (await mainPage.searchFeaturesInnerLinck).isDisplayed()),'rezalt of displaed');
        console.log((await (await mainPage.searchGitHubSponsorsInnerLinck).isDisplayed()),'rezalt of displaed');
        (await mainPage.searchTeamTextforBreack).moveTo();
        (await mainPage.searchExploreText).moveTo();
        await browser.pause(5000);
        console.log((await (await mainPage.searchExploreGitHubInnerLinck).isDisplayed()),'rezalt of displaed');
        console.log((await (await mainPage.searchEventsInnerLinck).isDisplayed()),'rezalt of displaed');
        (await mainPage.searchTeamTextforBreack).moveTo();
        (await mainPage.searchPraicingText).moveTo();
        await browser.pause(5000);
        console.log((await (await mainPage.searchPlsnsInnerLinck).isDisplayed()),'rezalt of displaed');
        console.log((await (await mainPage.searchEducationInnerLinck).isDisplayed()),'rezalt of displaed');
    });
     it('Test case 6 - Checking the possibility of filling in data for a free plan', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(1000);
        (await mainPage.searchPraicingText).moveTo();
        await browser.pause(1000);
        (await mainPage.searchPlsnsInnerLinck).click();
        await browser.pause(4000);
        (await pricing.searchJoinForFreeButton).click();
        await browser.pause(4000);
        (await createYourAccount.searchUsernameFild).addValue(generatorOfString.reciveString);
        (await createYourAccount.searchEmailAddresFild).addValue(generatorOfString.reciveEmail);
        (await createYourAccount.searchPasswordFild).addValue(generatorOfString.reciveString);
        (await createYourAccount.searchEmailPreferencesCheckBox).click();
        await browser.pause(4000);
        if ((await createYourAccount.searchCreateAccountButton).isClickable()){
            console.log('ok');
        }else {
            console.log('problem');
        }
    });
    it('Test case 7 - Checking the display of the label topic', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(1000);
        (await mainPage.searchExploreText).moveTo();
        (await mainPage.searchExploreGitHubInnerLinck).click();
        await browser.pause(1000);
        (await expore.searchTopicsLinck).click();
        await browser.pause(1000);
        console.log(await (await topics.searchTopicsText).isDisplayed(), 'rezalt of Displayed');
        if ((topics.urlPage == await browser.getUrl())){
            console.log('correct url');
        }else {
            console.log('not correct url');
        }

    });
    it('Test case 8 - Checking the correctness of the transition on request', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(1000);
        (await mainPage.searchExploreText).moveTo();
        (await mainPage.searchExploreGitHubInnerLinck).click();
        await browser.pause(1000);
        (await expore.searchTopicsLinck).click();
        await browser.pause(1000);
        (await topics.searchSearchGitHub).addValue(topics.textForSearch);
        await browser.pause(2000);
        (await topics.searchAllGithubForSearch).click();
        await browser.pause(2000);
        (await topics.searchReference).click();
        browser.pause(5000);
        const webUrl = await browser.getUrl();
        let lineSize = await webUrl.length;
        let newString = '';
        for (let i = (lineSize - topics.textForSearch.length); i < lineSize; i++){
            newString = newString + webUrl.charAt(i);
        }
        if(newString === topics.textForSearch){
            console.log('OK');
        }else{
            console.log('BAD, have problem with URL');
        }
    });
    it('Test case 9 - Creating a cloud account', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(1000);
        (await mainPage.searchEnterpriseLinc).click();
        await browser.pause(1000);
        (await enterprise.startAFrialTrial).click();
        await browser.pause(1000);
        (await picYourTrialPlan.searchEnterpriseCloudLinck).click()
        await browser.pause(3000);
        (await createYourAccountForEnterprise.searchUsernameFild).addValue(generatorOfString.reciveString);
        (await createYourAccountForEnterprise.searchEmailFild).addValue(generatorOfString.reciveEmail);
        (await createYourAccountForEnterprise.searchPaswordFild).addValue(generatorOfString.reciveString);
        (await createYourAccountForEnterprise.searchEmailPreferencesChackBox).click();
        await browser.pause(5000);
    });
    it('Test case 10 - Server account creation', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(1000);
        (await mainPage.searchEnterpriseLinc).click();
        await browser.pause(1000);
        (await enterprise.startAFrialTrial).click();
        await browser.pause(1000);
        (await picYourTrialPlan.searchEnterpriseCloudLinck).click()
        await browser.pause(3000);
        (await createYourAccountForEnterprise.searchUsernameFild).addValue(generatorOfString.reciveString);
        (await createYourAccountForEnterprise.searchEmailFild).addValue(generatorOfString.reciveEmail);
        (await createYourAccountForEnterprise.searchPaswordFild).addValue(generatorOfString.reciveString);
        (await createYourAccountForEnterprise.searchEmailPreferencesChackBox).click();
        await browser.pause(2000);
        (await browser).back()
        await browser.pause(2000);
        (await picYourTrialPlan.searchEnterpriseServerLinck).click();
        await browser.pause(2000);
        (await createYourAccountForEnerpServer.searchNameFild).addValue(generatorOfString.reciveString);
        (await createYourAccountForEnerpServer.searchCompanyFild).addValue(generatorOfString.reciveString);
        (await createYourAccountForEnerpServer.searchWorkEmailFild).addValue(generatorOfString.reciveEmail);
        (await createYourAccountForEnerpServer.searchPhoneNumberFild).addValue(generatorOfString.reciveTelefon);
        (await createYourAccountForEnerpServer.searchNotSureYetRadioButton).click();
        (await createYourAccountForEnerpServer.searchYesRadioButton).click();
        await browser.pause(5000);
    });
    it('Test case 11 - List of open vacancies', async () => {
        browser.setWindowSize( 1920, 1080 );
        await browser.url('https://github.com/');
        await browser.pause(1000);
        (await mainPage.searchCareersLinc).click();
        await browser.pause(2000);
        (await careers.openPositionLinck).click();
        await browser.pause(2000);
        console.log(await (await careers.busnessSystem).getText());
        console.log(await (await careers.customerSuccess).getText());
        console.log(await (await careers.design).getText());
        console.log(await (await careers.engineering).getText());
        console.log(await (await careers.financ).getText());
        console.log(await (await careers.humanResources).getText());
        console.log(await (await careers.internalCommunications).getText());
        console.log(await (await careers.legal).getText());
        console.log(await (await careers.marketing).getText());
        console.log(await (await careers.officeOfTheCOO).getText());
        console.log(await (await careers.openPositionLinck).getText());
        console.log(await (await careers.policy).getText());
        console.log(await (await careers.product).getText());
        console.log(await (await careers.publicRelations).getText());
        console.log(await (await careers.sales).getText());
        console.log(await (await careers.security).getText());
        console.log(await (await careers.services).getText());
        console.log(await (await careers.solutionsEngineering).getText());
        console.log(await (await careers.support).getText());
        console.log(await (await careers.workplace).getText());
        await browser.pause(3000);
    })
});


