export const findIntersection = (arr) => {

    let intersection = []

    const kume1 = arr[0].replace(/\s/g, "").split(",")  //bosluklari sil ve yeni array olustur.
    const kume2 = arr[1].replace(/\s/g, "").split(",")
    
    kume2.forEach((item) =>{       // kume2 deki degerleri tek tek gez ve kume1 de var mi arastir. Olanlari yeni arrayin icine gönder
        if(kume1.includes(item)){
            intersection.push(item)
        }
    })

    if(intersection.length != 0){
        return intersection.toString()
    }else{
        return false
    }
}

/* 
    (/\s/g, "") bosluklari "" ile degistir. Yani sil.
    .split() virgülden ayir ve yeni array yap.
*/