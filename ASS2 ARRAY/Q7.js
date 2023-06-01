// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

let nums = [1,2,2,3]
const isMonotonic = function(nums) {
 let asc = true;
    let des = true;
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        asc = false;
      } else if (nums[i] < nums[i + 1]) {
        des = false;
      }
    }
    return asc || des;
  };