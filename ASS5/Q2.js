// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.
// **Input:** n = 5

// **Output:** 2

// **Explanation:** Because the 3rd row is incomplete, we return 2.

let n = 5

const arrangeCoins = function(n) {
    let start = 0;
    let end = n+1;
    while(start < end){
        let mid = start+Math.floor((end-start)/2)
        let product = ((mid+1)*(mid+2))/2
        if(product > n) {
          end = mid  
        } else {
            start = mid+1
        }
    }
    return start
};