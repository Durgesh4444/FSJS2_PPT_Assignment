// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
let nums = [1,3,5,6]
let target = 5
const findExactPath = (nums, target, start, end) => {
    let mid =  Math.floor(start + (end - start) / 2);
    
    while(start < end) {
        if(nums[mid] == target) return mid;
        else if(nums[mid] < target) start = mid + 1;  
        else end = mid ;  

        mid =  Math.floor(start + (end - start) / 2);
    }

    return mid;
}
var searchInsert = function(nums, target) {
   let n = nums.length;

   if(n == 1 && nums[0] == target) return 0;

   const path = findExactPath(nums, target, 0, n);

   return path;
};