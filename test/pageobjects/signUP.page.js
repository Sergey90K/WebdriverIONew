class SignUp{
    get searchEmaleFild(){
        return $('#email');
    }
    get searchButonContinueForEmail(){
        return $('//*[@id="email-container"]/div[2]/button');
    }
    get searchPasswordFild(){
        return $('//*[@id="password"]');
    }
    get searchSetVisibelButton(){
        return $('//*[@id="password-container"]/div[2]/div/visible-password/button[2]');
    }
    get searchButonContinueForPassword(){
        return $('//*[@id="password-container"]/div[2]/button');
    }
    get searchUsernameFild(){
        return $('//*[@id="login"]');
    }
    get searchButtonContinueForUsername(){
        return $('//*[@id="username-container"]/div[2]/button');
    }
    get searchAnswerFild(){
        return $('//*[@id="opt_in"]');
    }
    get searchButtonContinueForAnswer(){
        return $('//*[@id="opt-in-container"]/div[2]/button');
    }
    get reciveAdresPage(){
        return 'https://github.com/signup?';
    }
    get checkString (){
        return 'Verify your account';
    }
    get searchCheckString(){
        return $('//*[contains(text(),"Verify your account")]');
    }
}
module.exports = new SignUp();