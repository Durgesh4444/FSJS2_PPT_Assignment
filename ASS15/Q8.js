function trap(heights) {
    let n = heights.length;
    let leftMax = new Array(n);
    let rightMax = new Array(n);
    let water = 0;
    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }
    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }
    for (let i = 0; i < n; i++) {
      water += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }
    return water;
  }