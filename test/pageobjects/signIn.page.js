class SignIn {
get searchUsernameFild(){
    return $('//*[@id="login_field"]');
}
get searchPasswordFild(){
    return $('//*[@id="password"]');
}
get searchSignInButton(){
    return $('//*[@id="login"]/div[4]/form/div/input[12]');
}
get testEmail (){
    return 'hevoc84709@nhmty.com';
}
get testPassword(){
    return 'sdkfojafdjajfaodfkowekfj';
}
get searchForgotPasswordReference(){
    return $('//*[@id="login"]/div[4]/form/div/a');
}
}
module.exports = new SignIn();