// Given two sparse matrices mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// **Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

// **Output:**

// [[7,0,0],[-7,0,3]]

A = [[1,0,0],[-1,0,3]]
B = [[7,0,0],[0,0,0],[0,0,1]]

const multiply = function(A, B) {
     const m = A.length
    
    if (m === 0) return []
  
    const n = A[0].length
    const p = B[0].length
    
    const result = new Array(m).fill(0).map(_ => new Array(p).fill(0))
    
    
    const crushedA = new Array(m).fill(0).map(_ => new Map())
    const crushedB = new Array(p).fill(0).map(_ => new Map())
   
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (A[i][j] !== 0) {
          crushedA[i].set(j, A[i][j])
        }
      }
    }
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < p; j++) {
        if (B[i][j] !== 0) {
          crushedB[j].set(i, B[i][j])
        }
      }
    }
  
    const mapMultiply = (mapA, mapB) => {
      if (mapA.size === 0 || mapB.size === 0) return 0
      
      let sum = 0
      let first = mapA
      let second = mapB
      if (mapA.size > mapB.size) {
        first = mapB
        second = mapA
      }
      
      for (let [index, num] of first) {
        if (second.has(index)) {
          sum += num * second.get(index)
        }
      }
      return sum
    }
 
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < p; j++) {
        result[i][j] = mapMultiply(crushedA[i], crushedB[j])
      }
    }
  
    return result
};
