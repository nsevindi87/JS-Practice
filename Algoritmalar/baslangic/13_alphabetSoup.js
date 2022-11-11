export const alphabetSoup = (str) => {
    let newArr = str.replace(/[^a-zA-Z]/g, "").split("").sort().join("")
    console.log(newArr)
}

/* harf disindaki diger karakterleri cikar va alfabetik olarak sirala ve stringe cevir. */