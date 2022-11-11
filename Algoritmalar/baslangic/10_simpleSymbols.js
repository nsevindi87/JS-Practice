export const simpleSymbols = (str) => {
    
    const arr = str.split("")
    let controlArr = []

    arr.forEach(char => {
        if((/[a-zA-Z]/).test(char)){
            if(arr[arr.indexOf(char)-1] === "+" && arr[arr.indexOf(char)+1] === "+"){
                controlArr.push(1)
            }else{
                controlArr.push(0)
            }
        }
    });

    console.log(controlArr);

    if(controlArr.includes(0)){
        return false
    }else{
        return true
    }

}

/* 
function simpleSymbols(str){
    let arr = str.toLowerCase().split("");
    for(var i = 0; i<arr.length; i++){
        if(arr[i] >= "a" && arr[i] >= "z"){
            if(i===0 || i===arr.length){
                return false;
            }

            if(arr[i-1] !== "+" || arr[i+1] !== "+" ){
                return false
            }
        }
    }
}
*/