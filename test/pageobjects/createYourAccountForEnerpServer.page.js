class CreateYourAccountForEnerpServer{
get searchNameFild(){
    return $('//*[@id="contact_request_name"]');
}
get searchCompanyFild(){
    return $('//*[@id="contact_request_organization_name"]');
}
get searchWorkEmailFild(){
    return $('//*[@id="contact_request_email"]');
}
get searchWorkEmailFild(){
    return $('//*[@id="contact_request_email"]');
}
get searchPhoneNumberFild(){
    return $('//*[@id="contact_request_phone"]');
}
get searchNotSureYetRadioButton(){
    return $('//*[@id="contact_request_instance_type_not_sure"]');
}
get searchYesRadioButton(){
    return $('//*[@id="questions_yes"]');
}
get searchAcceptTermsOfUseChackBox(){
    return $('//*[@id="contact_request_agreed_to_terms"]');
}

}
module.exports = new CreateYourAccountForEnerpServer();