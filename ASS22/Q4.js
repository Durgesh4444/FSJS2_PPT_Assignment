function areTraversalsSame(inorder, preorder, postorder) {
    if (inorder.length === 0) return true;
    if (inorder.length === 1) return inorder[0] === preorder[0] && inorder[0] === postorder[0];
    let root = preorder[0];
    let rootIndex = inorder.indexOf(root);
    let leftInorder = inorder.slice(0, rootIndex);
    let rightInorder = inorder.slice(rootIndex + 1);
    let leftPreorder = preorder.slice(1, rootIndex + 1);
    let rightPreorder = preorder.slice(rootIndex + 1);
    let leftPostorder = postorder.slice(0, rootIndex);
    let rightPostorder = postorder.slice(rootIndex, -1);
    return areTraversalsSame(leftInorder, leftPreorder, leftPostorder) && areTraversalsSame(rightInorder, rightPreorder, rightPostorder);
  }
  