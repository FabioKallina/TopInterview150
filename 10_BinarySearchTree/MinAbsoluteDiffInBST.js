
/**
Given the root of a Binary Search Tree (BST), 
return the minimum absolute difference between the values of any two different nodes in the tree.

Example 1:

Input: root = [4,2,6,1,3]
Output: 1

Example 2:

Input: root = [1,0,48,null,null,12,49]
Output: 1
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
var getMinimumDifference = function(root) {
    let prev = null;
    let minDiff = Infinity;

    let findMin = ( node ) => {
        if ( !node ) return;

        findMin(node.left);
        if ( prev !== null ) {
            let currDiff = Math.abs(node.val - prev);
            minDiff = Math.min(minDiff, currDiff);
        }
        prev = node.val;
        findMin(node.right);
    }
    findMin(root);
    return minDiff === Infinity ? 0 : minDiff;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(h)
 */