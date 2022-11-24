export const twoSum = (nums,target) => {

    let returnValue = ""

    if(nums.length === 2 && nums[0] + nums[1] === target) returnValue = [0,1]
    
    for (let i = 0; i < nums.length; i++) {
        let temp1 = nums[i]

        const numsFilter = nums.filter(item => item != temp1)
        
        for (let j = 0; j < numsFilter.length; j++) {
            if(temp1 + numsFilter[j] === target) return "["+i+","+(j+1)+"]"
            
        }
    }
    
    return returnValue === "" ? false : returnValue

}

/* 
    Verilen parametre array ve parametre hedef sayilarini karsilastir.
    Arrayin icerisindeki sayilardan toplami hedef sayi olan sayilarin indexini al.
*/