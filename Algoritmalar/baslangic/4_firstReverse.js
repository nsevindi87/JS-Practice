export const firstReverse = (str) => {

    /* const arr = str.split("")
    const reversedArr = arr.reverse()
    const newStr = reversedArr.join("") */

    return str.split("").reverse().join("")
}

/* 
    .split() - ilgili yerden ayir ve array yap
    .reverse() - ters cevir
    .join() - arrayi string yap
*/