function maxDiff(nums) {
    const n = nums.length;
    if (n < 2) {
      return 0;
    }
  
    const min = nums[0];
    const max = nums[1] - min;
  
    for (let i = 2; i < n; i++) {
      const diff = nums[i] - min;
      if (diff > max) {
        max = diff;
      }
      if (nums[i] < min) {
        min = nums[i];
      }
    }
  
    return max;
  }