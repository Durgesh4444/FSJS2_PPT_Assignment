function canRepresentBST(arr) {
    let i = 0;
    const n = arr.length;
    const q = [];
    let root = arr[i++];
    q.push(root);
    while (q.length > 0 && i < n) {
      const parent = q.shift();
      const left = arr[i++];
      if (left != null) {
        if (left < parent) {
          return false;
        }
        q.push(left);
      }
      const right = arr[i++];
      if (right != null) {
        if (right > parent) {
          return false;
        }
        q.push(right);
      }
    }
    return true;
  }
  