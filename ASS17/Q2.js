var maxSubarraySumCircular = function(nums) {
    const n = nums.length;
    let totalSum = 0;
    let maxSum = -Infinity;
    let curMax = 0;
    let minSum = Infinity;
    let curMin = 0;
    for(let i=0; i<n; i++){
        totalSum += nums[i];
        curMax = Math.max(curMax + nums[i], nums[i]);
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(curMin + nums[i], nums[i]);
        minSum = Math.min(minSum, curMin);
    }
    return maxSum > 0 ? Math.max(maxSum, totalSum-minSum) : maxSum;
};