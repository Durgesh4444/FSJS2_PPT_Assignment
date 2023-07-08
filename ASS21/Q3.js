class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function convertToDLL(root) {
    let head = null;
    let prev = null;
  
    function inorder(node) {
      if (node == null) {
        return;
      }
  
      inorder(node.left);
  
      if (prev == null) {
        head = node;
      } else {
        prev.right = node;
        node.left = prev;
      }
  
      prev = node;
  
      inorder(node.right);
    }
  
    inorder(root);
  
    return head;
  }
  
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  let head = convertToDLL(root);
  
  let str = "";
  while (head != null) {
    str += head.val + " ";
    head = head.right;
  }
  
  console.log(str.trim());
  