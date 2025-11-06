
/**
Given the root of a complete binary tree, return the number of the nodes in the tree.
According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, 
and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
Design an algorithm that runs in less than O(n) time complexity.


Example 1:

Input: root = [1,2,3,4,5,6]
Output: 6

Example 2:

Input: root = []
Output: 0

Example 3:

Input: root = [1]
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
var countNodes = function(root) {
    
    let getDepth = (node) => {
        let depth = 0;
        while ( node ) {
            depth++;
            node = node.left;
        }
        return depth;
    }

    if ( !root ) return 0;
    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);

    //if left and right depths are equal = perfect tree
    if ( leftDepth === rightDepth ) {
        return ( 1 << leftDepth ) + countNodes(root.right);
    } else {
        return ( 1 << rightDepth ) + countNodes(root.left);
    }
};
/** Time and Space Complexity
 * Time: O(log^2 n)
 * Space: O(log n)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** O(n) Solution
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if ( !root ) return 0;

    let q = [root];
    let nodes = 0;
    while ( q.length ) {
        let level = q.length;

        for ( let i = 0; i < level; i++ ) {
            let node = q.shift();

            if ( node.left ) q.push(node.left);
            if ( node.right ) q.push(node.right);

            nodes++;
        }
    }

    return nodes;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(h)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** O(n) Solution
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    let nodes = 0;
    if ( root ) {
        nodes += countNodes(root.left);
        nodes += countNodes(root.right);

        nodes++;
    }
    return nodes;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(h)
 */