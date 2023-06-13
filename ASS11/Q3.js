var missingNumber = function (nums) {

    let sum = 0, numsSub = 0
    for (let i = 0; i <= nums.length; i++) sum = sum + i
    for (let i = 0; i < nums.length; i++) numsSub = numsSub + nums[i]
    return sum - numsSub
};