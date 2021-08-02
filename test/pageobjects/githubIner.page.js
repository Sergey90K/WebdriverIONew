class GithubIner{
    get pageAdres(){
        return 'https://github.com/';
    }
    get acauntButton(){
        return $('/html/body/div[1]/header/div[7]/details/summary');
    }
    get searchNameAccaunt(){
        return $('/html/body/div[1]/header/div[7]/details/details-menu/div[1]/a/strong');
    }
    get searchSignOut(){
        return $('/html/body/div[1]/header/div[7]/details/details-menu/form/button');
    }
}
module.exports = new GithubIner();