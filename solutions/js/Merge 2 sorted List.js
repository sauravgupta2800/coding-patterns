/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
 Complexities
 Time - O(n) | Space - O(1)
*/

// SOLUTION 1: 2 Pointers
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode();
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  }
  if (list2) {
    curr.next = list2;
  }

  return dummy.next;
};

// SOLUTION 2: Recursion (2 pointer extension)
var mergeTwoLists = function (list1, list2) {
  if (!list2) return list1;
  if (!list1) return list2;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
