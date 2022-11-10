export const firstFactorial = (num) =>{
    let factorial = 1
    for (let index = 2; index <= num; index++) {
        factorial *= index
    }
    return factorial
}