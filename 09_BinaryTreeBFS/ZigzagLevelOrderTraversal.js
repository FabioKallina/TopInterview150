
/**
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if ( !root ) return [];

    let q  = [root];
    let ans = [];
    let zig = false;
    while ( q.length ) {
        let level = q.length;
        let order = [];

        for ( let i = 0; i < level; i++ ) {
            if ( !zig ) {
                const node = q.shift();
                order.push(node.val);
                if ( node.left ) q.push(node.left);
                if ( node.right ) q.push(node.right);
            } else {
                const node = q.pop();
                order.push(node.val);
                if ( node.right ) q.unshift(node.right);
                if ( node.left ) q.unshift(node.left);
            }
        }
        ans.push(order);
        zig = !zig;
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */