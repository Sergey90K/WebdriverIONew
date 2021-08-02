class GeneratorOfString {
    get reciveString(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 15; i++){text += possible.charAt(Math.floor(Math.random() * possible.length));}
        return text;
       // var result = '';
       //  while (!result) result = Math.random().toString(36).substring(2); 
       //  return result;
    }
    get reciveEmail(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 8; i++){text += possible.charAt(Math.floor(Math.random() * possible.length));}
        text = text + '@gmail.com';
        return text;
       
    }
    get reciveTelefon(){
        let text = "+";
        let possible = "0123456789";
        for (let i = 0; i < 12; i++){text += possible.charAt(Math.floor(Math.random() * possible.length));}
        return text;
        //return '+380665449762'
    }
};
module.exports = new GeneratorOfString();