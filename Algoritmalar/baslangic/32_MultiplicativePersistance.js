export const multiplicativePersistance = (num) => {
    let result = multiply(num)
    let multiplicativePersistance = 1

    if(result < 10) return 0

    while (result > 9){
        multiplicativePersistance ++
        result = multiply(result)
    }



    return multiplicativePersistance + " döngü sonucunda sonuc " +result
}

const multiply = (num) => {
    const numArr = num.toString().split("")
    let multiply = 1;

    for (let index = 0; index < numArr.length; index++) {
        multiply *= numArr[index]
    }

    return multiply
}