export const wordCount = (str) => {
    return str.trim().split(" ").length
}

/* 
    .trim() cümlenin basindaki ve sonundaki bosluklari siler.
    Cümlenin basinda bosluk varsa split ona ayri bir kelime olarak ayirir.
*/