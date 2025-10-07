
/**
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/
/** First Solution
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = new Map();
    for ( let num of nums ) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for ( let key of count.keys() ) {
        if ( count.get(key) > (nums.length / 2) ) return key;
    }
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/** Optimized Spacing
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = 0, count = 0;
    for ( let n of nums ) {
        if ( candidate === 0 ) {
            candidate = n;
        }
        if ( candidate === n ) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */