/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {number} k
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(k, lists) {
    if (k === 0) {
      return null;
    }
    if (k === 1) {
      return lists[0];
    }
  
    const mid = Math.floor(k / 2);
    const left = mergeKLists(mid, lists);
    const right = mergeKLists(k - mid, lists.slice(mid));
  
    return mergeTwoLists(left, right);
  };
  