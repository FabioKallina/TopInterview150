
/**
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2
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
 * @return {number}
 */
var maxDepth = function(root) {
    if ( !root ) return 0;

    let dfs = ( node ) => {
        if ( !node ) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        return ans = Math.max(left, right) + 1;
    }
    let ans = 0;
    return dfs(root);
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(h)
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if ( !root ) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1;
}
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(h)
 */