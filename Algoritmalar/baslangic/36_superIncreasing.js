export const superIncreasing = (arr) => {
    for (let index = 1; index < arr.length; index++) {
        /* 2-Asagidaki foksiyondan gelen toplamlari siraya sokar */
        let sum = sumOfSubSet (arr, index)
        /* 3-Toplam sayi indexdeki sayidan büyükse false döner */
        if(sum>=arr[index]) return false
    }

    return true
}

/*1- Her seferinde index geliyor ve bu fonk. indexe kadar olan sayilarin toplamini veriyor. */
const sumOfSubSet =(arr, index)=>{
    let sum = 0
    for (let j = 0; j < index; j++) {
        sum += arr[j]
    }
    return sum
}

/* Arraydaki sayilar taranir ve kendisinden önceki sayilarin toplamindan büyük ise TRUE, degilse false dönmeli. Örnek ARR = [1,3,6,13,54] */