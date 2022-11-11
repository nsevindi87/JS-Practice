export const letterCapitalize = (str) => {
    
    let newArr = []
    str.split(" ").forEach((word)=>{
        newArr.push(word.charAt(0).toUpperCase()+word.slice(1,word.length))
    })
   
    return newArr.join(" ")
}