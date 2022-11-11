export const letterChange = (str) => {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char)=>{
        if(char === "z"){
            return "a"
        }else{
            return String.fromCharCode(char.charCodeAt()+1)
        }
    })

    let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, char => char.toUpperCase())

    return vowelCapitalize
}


/* 
    "a".charCodeAt() - a nin tabeladaki degeri
    String.fromCharCode(66) - 66. karakteri getir
    String.fromCharCode("a".charCodeAt() + 1) a dan bir sonraki karakteri getir
*/