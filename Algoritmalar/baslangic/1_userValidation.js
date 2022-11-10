export const userValidation = (str) =>{
    if(
        str.length >=4 && str.length <= 25 &&  //The username is between 4 and 25 characters
        (/[a-zA-Z]/).test(str.slice(0,1)) &&//str.charAt(0)  - it musst start with a letter
        (/^\w+$/).test(str) &&//a-z A-Z 0-9 _ karakterlerini icerir. "\w"  - It can be only contain letters, numbers nad the underscore chatacter.
        (/[a-zA-Z0-9]/).test(str.slice(-1))
    ){
        return true
    }else{
        return false
    }

}

/* 
regular expression
.charAt() .slice()
.test() - 

*/