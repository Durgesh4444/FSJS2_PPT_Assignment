
// 💡 **Q3.** Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5

// Output: 2

let nums = [1,3,5,6]
let target=4;


const output = (nums, target)=>{
    for(let number of nums){
        if(number === target){
            return nums.indexOf(number)
        }else if (number != target){
            nums.push(target)
            nums=nums.sort((x,y)=>x-y)
            return nums.indexOf(target)
        }
    }
} 
console.log(output(nums, target));
