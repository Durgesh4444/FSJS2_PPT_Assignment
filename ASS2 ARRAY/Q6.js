// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise,
// return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4

let nums = [-1,0,3,5,9,12]
let target = 9

const search = function(nums, target) {
    let start = 0;
let end = nums.length - 1;
let curr = null;
while (start <= end) {
curr = Math.round((end - start) / 2) + start;
if (nums[curr] === target) {
return curr;
} else if (target < nums[curr]) {
end = curr - 1;
} else {
start = curr + 1;
}
}
return -1;
};