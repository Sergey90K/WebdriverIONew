class PasswordReset{
get searchEmailFild(){
    return $('//*[@id="email_field"]');
}
    //get searchCheckButton(){
      //  return $('//*[@id="home_children_button"]');
     // return $('#home_children_button');
   // }
    get searchSendPasswordResetEmailButton(){
        return $('//*[@id="forgot_password_form"]/div[3]/input[2]');
    }
    get rearchResetYourPasswordText(){
        return $('#forgot_password_form > div.auth-form-header.p-0 > h1');
    }
    get reciveURL (){
        return 'https://github.com/password_reset';
    }
}
module.exports = new PasswordReset();