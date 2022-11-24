export const firstNonRepeating = (pStr) => {

    const str = pStr.toLowerCase()
    
    let returnValue =""

    for (let index = 0; index < str.length; index++) {
        //Stringdeki bütün karakterleri sirayla döner.
        let itemInTheLoop = str[index]
        //Sirayla secilen karakteri String icinden cikartir.
        let newStr = str.slice(0,index) + str.slice(index+1)
        //returnValue nun ici dolduktan sonra bir daha if sarti saglamadigi icin sadece ilk tekrar etmeyen karakter döner
        if(returnValue==="" && newStr.indexOf(itemInTheLoop)===-1){
            returnValue = itemInTheLoop
        }
    }



    return returnValue

}
/* 
    Verilen parametre string icerisinde ilk tekrar etmeyen karakteri döndür.
*/