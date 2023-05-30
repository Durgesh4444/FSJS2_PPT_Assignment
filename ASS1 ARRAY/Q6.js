// 💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]

// Output: true

let nums =[1,2,3,4,6,7]

const twice =(nums)=>{
    nums.sort((x,y)=>x-y)
    for(let i=0; i<nums.length; i++){
        if(nums[i]=== nums[i+1]){
            return true
        }
    }
    return false
}
console.log(twice(nums));