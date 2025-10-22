
/**
Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:

Input: head = [0,1,2], k = 4
Output: [2,0,1]
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if ( !head ) return head;

    let len = 1;
    let dummy = head;
    while ( dummy.next ) {
        len++;
        dummy = dummy.next;
    }

    k = k % len;
    if ( k === 0 ) return head;

    let curr = head;
    for ( let i = 0; i < len - k - 1; i++ ) {
        curr = curr.next;
    }

    let newHead = curr.next;
    curr.next = null;
    dummy.next = head;

    return newHead;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */