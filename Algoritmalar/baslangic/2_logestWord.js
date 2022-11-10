export const longestWord = (str) =>{
    const arr = str.replace(/[^a-zA-Z ]/g, "").split(" ") //harf veya bosluk olmayan bütün degerleri degistir. Ve bosluklardan ayirarak yeni array yap!

    arr.sort((a,b)=> {return b.length - a.length})  // uzun kelimeden kisa kelimeye dogru sirala
    return arr [0]
}

/* 
.replace() - bul ve degistir.
.split(" ") - ilgili yerden böl ve array olustur.
.sort() array icerisinde string varsa bas harflerine göre siralar.
        uzunluga göre siralamasi icin foksiyon yazilir.
*/