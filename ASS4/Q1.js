// 💡 Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

let arr1 = [1,2,3,4,5];
let arr2 = [1,2,5,7,9];
let arr3 = [1,3,4,5,8]

const arraysIntersection = function(arr1, arr2, arr3) {
    const result = []
    
    while (arr1.length > 0 && arr2.length > 0 && arr3.length > 0) {
        const head1 = arr1[0]
        const head2 = arr2[0]
        const head3 = arr3[0]
        
        if (head1 === head2 && head1 === head3) {
            result.push(head1)
            arr1.shift()
            arr2.shift()
            arr3.shift()
        } else {
           
            if (head1 <= head2 && head1 <= head3) {
                arr1.shift()
            }
            
            if (head2 <= head1 && head2 <= head3) {
                arr2.shift()
            }
            
            if (head3 <= head1 && head3 <= head2) {
                arr3.shift()
            }
        }
    }
    
    return result
  };