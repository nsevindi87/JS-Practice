export const isPalindrome = (str) => {

    const newStr = str.replace(/ /g, "").toLowerCase()

    return newStr.split("").reverse().join("") === newStr ? true : false 
}

/* 
    Önce bosluklari sileriz.
    .split() ile arraye ceviririz ve ters ceviririz ve stringe döndürürüz.
    Karsilastirma yapariz ve ayniysa true döndürürüz.
*/