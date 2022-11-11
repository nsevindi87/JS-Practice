export const arrayAddition = (arr) => {

    /* 1. Yöntem
     const newArr = [...arr]   //arrayin bir kopyasini aldik
    let sum = 0
    const maxValue = Math.max (...arr) //arraydeki en büyük sayiyi alir

    newArr.splice(arr.indexOf(maxValue),1)  //splice array üzerinde degisiklik yapar

    for(let i=0; i<newArr.length; i++){
        sum += newArr[i]     // arrayde geri kalanlari toplar
    }

    return maxValue === sum ? true : false */

    //2. Yöntem
    arr.sort((a,b)=>a-b)
    let sum = 0

    const maxValue = arr[arr.length-1]
    
    for (let i = 0; i < arr.length-1; i++) {
        sum += arr[i]
    }

    return maxValue === sum ? true : false 
}