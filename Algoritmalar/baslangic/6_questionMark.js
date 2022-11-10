export const questionMark = (str) => {

    if(str.length <5){
        return false
    }

    const newStr = str.replace(/[^0-9?]/g,"")   //0-9 arasindaki rakam ve ? disindakileri degistir.

    const arr = newStr.split("")  //yeni array olusturma

    let sums = []
    let sum = 0
    let iterator = 0

    arr.forEach((item) => {
        if(item != "?"){       //Soru isaret olmayan karaktere gelince 
            sum = parseInt(item) + parseInt(arr[iterator+4])  // karakteri ve 4.karakteri topla
            sums.push(sum)
        }
        iterator += 1
    })

    console.log(str)
    console.log(newStr)
    console.log(sums)

    return sums.includes(10) ? true : false
}

/* 
    Verilen string icerisinde 3 soru isareti onunde ve sonundaki sayilari topla. Eger 10 ise true döndür.
*/