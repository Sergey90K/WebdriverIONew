class CreateYourAccountForEnterprise{
get searchUsernameFild(){
    return $('//*[@id="user_login"]');
}
get searchEmailFild(){
    return $('//*[@id="user_email"]');
}
get searchPaswordFild(){
    return $('//*[@id="user_password"]');
}
get searchEmailPreferencesChackBox(){
    return $('//*[@id="all_emails"]');
}
}
module.exports = new CreateYourAccountForEnterprise();