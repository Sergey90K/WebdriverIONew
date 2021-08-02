class Expore{
get searchTopicsLinck(){
    return $('//*[@id="js-pjax-container"]/div[1]/nav/div/a[2]');
}
}
module.exports = new Expore();