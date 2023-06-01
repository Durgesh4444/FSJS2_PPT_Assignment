// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//            ● 0 <= a, b, c, d < n
//            ● a, b, c, and d are distinct.
//            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
let nums = [1,0,-1,0,-2,2]
let target = 0
const fourSum = function(nums, target) {
    let res = []
    nums.sort((a,b)=>a-b)

    for(let i =0; i< nums.length-3;i++){
        for(let j =i+1; j<nums.length-2;j++){
            let f = nums[i];
            let s = nums[j];
            let left = j+1;
            let right = nums.length-1;
            while(left<right){
                let sum = f + s + nums[left] + nums[right];
                if(sum < target) left++
                else if(sum > target) right--
                else {
                    res.push([f,s,nums[left],nums[right]]);
                    while(nums[left] == nums[left+1])left++
                    while(nums[right] == nums[right-1]) right--
                    left++
                    right--
                }
            }
            while(nums[j] == nums[j+1]) j++
        }
        while(nums[i] == nums[i+1]) i++
    }
    return res
};