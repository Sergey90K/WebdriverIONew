class MainPage{
get searchEmailFild(){
    return $('#user_email');
}
get searchButonSignUpForGitHub(){
    return $('/html/body/div[4]/main/div[1]/div[1]/div[1]/div/div/div[1]/form/div/button');
}
get serchButtonSignUp(){
    return $('/html/body/div[1]/header/div/div[2]/div[2]/a');
}
get searchButtonSignIn(){
    return $('/html/body/div[1]/header/div/div[2]/div[2]/div[2]/a');
}
get searchWhyGitHubText(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details/summary');
   // return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details');
}
get searchExploreText(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/summary');
}
get searchPraicingText(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/summary')
}
get searchTeamTextforBreack(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[2]/a');
}
get searchFeaturesInnerLinck(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details/div/a');
}
get searchGitHubSponsorsInnerLinck(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[1]/details/div/ul[2]/li[1]/a');
}
get searchExploreGitHubInnerLinck(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/div/ul[1]/li/a')
}
get searchEventsInnerLinck(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[4]/details/div/ul[3]/li[2]/a');
}
get searchPlsnsInnerLinck(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/div/a');
}
get searchEducationInnerLinck(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[6]/details/div/ul[2]/li/a');
}
get searchEnterpriseLinc(){
    return $('/html/body/div[1]/header/div/div[2]/nav/ul/li[3]/a');
}
get searchCareersLinc(){
    return $('/html/body/footer/div[1]/div/div[5]/ul/li[3]/a');
}
}
module.exports = new MainPage();