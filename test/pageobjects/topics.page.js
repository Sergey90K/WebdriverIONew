class Topics{
get searchTopicsText(){
    return $('//*[@id="js-pjax-container"]/div[2]/div/h1');
}
get urlPage(){
    return 'https://github.com/topics';
}
get searchSearchGitHub(){
    return $('/html/body/div[1]/header/div/div[2]/div[2]/div[1]/div/div/form/label/input[1]');
}
get textForSearch(){
    return 'webdriverio';
}
get searchAllGithubForSearch(){
    return $('//*[@id="jump-to-suggestion-search-global"]/a/div[3]/span[2]');
}
get searchReference(){
    return $('//*[@id="js-pjax-container"]/div/div[3]/div/ul/li[1]/div[2]/div[1]/a')
}
get 
}
module.exports = new Topics();