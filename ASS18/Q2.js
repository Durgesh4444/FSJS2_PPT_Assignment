function sortColors(nums) {
    let red = 0;
    let white = 0;
    let blue = nums.length - 1;
  
    while (white <= blue) {
      if (nums[white] === 0) {
        swap(nums, red, white);
        red++;
        white++;
      } else if (nums[white] === 1) {
        white++;
      } else {
        swap(nums, white, blue);
        blue--;
      }
    }
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }