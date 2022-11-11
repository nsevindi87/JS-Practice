export const vowelCount = (str) => {

    let count = 0;

    [...str].forEach(letter =>{

        if((/[a/e/i/o/u/A/E/I/O/U]/).test(letter)){
            count += 1
        }
    })

    return count
}