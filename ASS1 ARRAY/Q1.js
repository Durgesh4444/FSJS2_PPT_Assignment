
// 💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

let nums =[2,7,11,15]
let target = 9

const findpair =(nums, target) =>{
    let left =0;
    let right =nums.length-1;
    while(left<right){
        if(nums[left]+nums[right]===target){
            return [left, right]
        }else if(nums[left]+nums[right]>target){
            right--;
        }else{
            left++;
        }
    }
}
console.log(findpair(nums, target));



// const ans =(nums, target)=>{
// for(let number of nums){
//     for(let i=0; i<nums.length; i++){
//         sum = number+nums[i]
//         if(sum===target){
//             return [nums.indexOf(number), i]
//         }
//     }
    
// }
// }
// console.log(ans(nums, target));








