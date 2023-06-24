function find132pattern(nums) {
    const n = nums.length;
    const stack = [];
    let min = nums[0];
  
    for (let i = 1; i < n; i++) {
      if (nums[i] < min) {
        return true;
      }
  
      while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
        min = stack.pop();
      }
  
      stack.push(nums[i]);
    }
  
    return false;
  }