export const exOh = (str) => {

    let x = 0;
    let o = 0;

    [...str].forEach(item=>{
        item === "x" ? x += 1 : o += 1
    })

    return x === o ? true : false
}


/* x ve o sayisini karsilastiriyoruz.
    Stringi array yapmak icin [...str] kullanilabilir. daha önce split("") kullaniliyordu.
*/