export const productDigits = (pNum) => {
    let multipliers = []
    for (let i = 1; i <= pNum; i++) {
        pNum % i === 0 && multipliers.push(i)
    }

    let medium = multipliers.length / 2

    if(multipliers[medium-1] * multipliers[medium] === 24){
        console.log(multipliers[medium-1].toString().length + multipliers[medium].toString().length );
        console.log(multipliers[medium-1] + multipliers[medium]);
    }
    
    return multipliers

}
 
/* Parametre sayi carpanlara ayrildi.
   Ortadaki iki sayi alindi ve kac basamaktan olustugu hesaplanarak yazdirildi.
    Carpanlardan toplami en düsük olan sayi bulundu.
*/