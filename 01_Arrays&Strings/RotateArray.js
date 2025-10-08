
/**
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/
/** Reversing
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const normalizeK = k % nums.length; //this is to deal with a k > nums.length
    let nums1 = nums.slice(-normalizeK);
    let nums2 = nums.slice(0, -normalizeK);
    let combined = [...nums1, ...nums2];
    for ( let i = 0; i < nums.length; i++ ) {
        nums[i] = combined[i];
    }
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/** Reversing
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const normalizeK = k % nums.length;
    let temp = nums.slice(-normalizeK);
    
    for ( let i = nums.length - 1; i >= normalizeK; i-- ) {
        nums[i] = nums[i - normalizeK];
    }

    for ( let i = 0; i < normalizeK; i++ ) {
        nums[i] = temp[i];
    }
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    if ( k > n ) {
        k = k % n;
    }
    // 1. Reverse the given Array
    let l = 0, r = n - 1;
    while ( l < r ) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l++;
        r--;
    }
    // 2. Reverse the first k elements
    let a = 0, b = k - 1;
    while ( a < b ) {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
        a++;
        b--;
    }
    // 3. Reverse the rest of the elements
    let c = k, d = n - 1;
    while ( c < d ) {
        let temp = nums[c];
        nums[c] = nums[d];
        nums[d] = temp;
        c++;
        d--;
    }   
};
/** Time and Space Complexity
 * Time: O(n)
 * Space: O(1)
 */