const countSmaller = (nums) => {
    const n = nums.length;
    const counts = new Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
      for (let j = i + 1; j < n; j++) {
        if (nums[j] < nums[i]) {
          counts[i]++;
        }
      }
    }
    return counts;
  };