export const letterCount = (str) => {

    const arr = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ")

    let kelimeNesneleri = []

    for (let i = 0; i < arr.length; i++) {
        let obj = {}

        arr[i].split("").forEach(char => {
            char in obj ? obj[char] += 1 : obj[char] = 1
        });

        kelimeNesneleri.push(obj)
    }

    let maxFrequencies = []

    kelimeNesneleri.forEach((nesne) => {
        maxFrequencies.push(Math.max(...Object.values(nesne)))
    })

    let maxValue = Math.max(...maxFrequencies)

    return maxValue < 2 ? -1 : (arr[maxFrequencies.indexOf(maxValue)] ? arr[maxFrequencies.indexOf(maxValue)] : -1)

}

/* Kelime icerisinde birden fazla tekrar eden harfi bul ve sonunda bu harfin icinde oldugu kelimeyi getir. */

/* const newArr = [number, alphabetU, alphabetL, symbols];
   for (let index = 0; index < 8; index++) {
    let randomlyNumber = Math.floor(Math.random()*4) ; 
    for (let j = 0; j < 1; j++) {
      let randomlyNumber2 = Math.floor(Math.random()*newArr[randomlyNumber].length) ; 
      if (password.charAt(password.length-1) !== newArr[randomlyNumber][randomlyNumber2]) {
        password += newArr[randomlyNumber][randomlyNumber2];
      }else{
        password += newArr[randomlyNumber][randomlyNumber2+1];
      }
    }
  } */