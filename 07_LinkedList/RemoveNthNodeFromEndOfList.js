
/**
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:

Input: head = [1], n = 1
Output: []

Example 3:

Input: head = [1,2], n = 1
Output: [1]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head);
    let curr = dummy, prev = dummy;
    while (n > 0) {
        curr = curr.next;
        n--;
    }
    while (curr.next) {
        curr = curr.next;
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return dummy.next;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** Without Dummy
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let temp = head;
    while (temp) {
        len++;
        temp = temp.next;
    }
    if ( n === len ) return head.next;
    let curr = head;
    for ( let i = 0; i < len - n - 1; i++ ) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return head;
};