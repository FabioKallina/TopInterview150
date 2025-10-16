
/**
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/
/** Hash Map
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for ( let i = 0; i < nums.length; i++ ) {
        if ( map.has(nums[i]) ) {
            if ( Math.abs(map.get(nums[i]) - i) <= k ) return true;
        }
        map.set(nums[i], i);
    }
    return false;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    for ( let i = 0; i < nums.length; i++ ) {
        if ( i > k ) {
            set.delete(nums[i - k - 1]);
        }

        if ( set.has(nums[i]) ) {
            return true;
        }

        set.add(nums[i]);
    }
    return false;
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(k)
 */