class Careers{
get openPositionLinck(){
    return $('/html/body/div[4]/main/div[2]/div/div[1]/div/p[2]/a[1]');
}
get busnessSystem(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[1]/div/button/h3');
}
get customerSuccess(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[2]/div/button/h3');
}
get design(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[3]/div/button/h3');
}
get engineering(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[4]/div/button/h3');
}
get financ(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[5]/div/button/h3');
}
get humanResources(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[6]/div/button/h3');
}
get internalCommunications(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[7]/div/button/h3');
}
get legal(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[8]/div/button/h3');
}
get marketing(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[9]/div/button/h3');
}
get officeOfTheCOO(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[10]/div/button/h3');
}
get policy (){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[11]/div/button/h3');
}
get product(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[12]/div/button/h3');
}
get publicRelations(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[13]/div/button/h3');
}
get sales(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[14]/div/button/h3');
}
get security(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[15]/div/button/h3');
}
get services(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[16]/div/button/h3');
}
get solutionsEngineering(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[17]/div/button/h3');
}
get support(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[18]/div/button/h3');
}
get workplace(){
    return $('/html/body/div[4]/main/div[2]/div/div[5]/div[19]/div/button/h3');
}
//get ollList(){
 //   let list = '';
 //   for (let i = 1; i < 20; i++){
  //      let linc ='';
       // linc = '/html/body/div[4]/main/div[2]/div/div[5]/div[' + i + ']/div/button/h3';
   //     let str = (await $ (linc)).getText()
  //      list= list + str; 
 //    }
  //   return list;
//}
}
module.exports = new Careers();