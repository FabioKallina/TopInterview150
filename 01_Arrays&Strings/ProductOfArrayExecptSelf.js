
/**
Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/
/** Using Division
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let zeroCount = 0;
    let total = 1;
    for ( let n of nums ) {
        if ( n === 0 ) {
            zeroCount++;
        } else {
            total *= n;
        }
    }

    let ans = new Array(n).fill(0);

    if ( zeroCount > 1 ) return ans;

    for ( let i = 0; i < nums.length; i++ ) {
        if ( zeroCount > 0 ) {
            ans[i] = (nums[i] === 0) ? total : 0;
        } else {
            ans[i] = total / nums[i];
        }
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

*/
/** Using Division
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1);

    let l = 1;
    for ( let i = 0; i < nums.l; i++ ) {
        res[i] *= l;
        l *= nums[i];
    }

    let r = 1;
    for ( let i = nums.length - 1; i >= 0; i++ ) {
        res[i] *= r;
        r *= nums[i];
    }
    return ans;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */