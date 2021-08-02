class PicYourTrialPlan{
get searchEnterpriseCloudLinck(){
    return $('//*[@id="js-pjax-container"]/div/div[2]/div/div/div/div[1]/div/div[1]/a/div/label/div[2]/div[1]');
}
get searchEnterpriseServerLinck(){
    return $('//*[@id="js-pjax-container"]/div/div[2]/div/div/div/div[2]/div[1]/a/div/label/div[2]/div[1]');
}
}
module.exports = new PicYourTrialPlan();