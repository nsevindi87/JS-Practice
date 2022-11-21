export const multiplicativePersistance = (num) => {
    let result = multiply(num)
   


    
    return result
}

const multiply = (num) => {
    const numArr = num.toString().split("")
    let multiply = 1;

    for (let index = 0; index < numArr.length; index++) {
        multiply *= numArr[index]
    }

    return multiply
}