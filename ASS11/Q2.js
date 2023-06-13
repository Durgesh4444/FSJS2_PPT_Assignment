function findPeakElement(nums) {
   let left = 0
   let right = nums.length - 1
   while (left < right) {
       const mid = Math.floor((left + right) / 2)
       if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
           return mid
       } else if (nums[mid] < nums[mid - 1]) {
           right = mid - 1
       } else {
           left = mid + 1
       }
   }
   return left
}