
function constructBST(arr) {
    if (arr.length === 0) {
      return null;
    }
    const root = new TreeNode(arr[0]);
    let i = 1;
    while (i < arr.length && arr[i] < root.val) {
      i++;
    }
    root.left = constructBST(arr.slice(1, i));
    root.right = constructBST(arr.slice(i));
    return root;
  }