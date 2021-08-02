class CreateYourAccount{
get searchUsernameFild(){
    return $('//*[@id="user_login"]');
}
get searchEmailAddresFild(){
    return $('//*[@id="user_email"]');
}
get searchPasswordFild(){
    return $('//*[@id="user_password"]');
}
get searchEmailPreferencesCheckBox(){
    return $('//*[@id="all_emails"]');
}
get searchCreateAccountButton(){
    return $('//*[@id="signup_button"]');
}
}
module.exports = new CreateYourAccount();