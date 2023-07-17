/*
* 34. Find First and Last Position of Element in Sorted Array (Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*
Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
*/

// Method 2: Binary search
const searchRangeBS = (nums, target) => {
    let ans = [-1,-1]
    ans[0] = binarySearch(nums, target, true)
    if(ans[0] !== -1){
        ans[1] = binarySearch(nums, target, false)
    }
    return ans
}

const binarySearch = (array, target, isLeftSearching)=>{
    let ans = -1
    let start = 0
    let end = array.length - 1

    while (start <= end){
        let middleIndex = Math.floor((start + end) / 2)

        if (target < array[middleIndex]){
            end = end - 1
        }
        if (target > array[middleIndex]){
            start = start + 1
        }
        if (target === array[middleIndex]){
            ans = middleIndex
            if(isLeftSearching){
                end = middleIndex - 1
            } else {
                start = middleIndex + 1
            }
        }
    }
    return ans
}
console.log(searchRangeBS([5,7,7,8,8,10], 8))

// Method 1: Brute force approach
const searchRange = (nums, target) =>{
    let position = [-1, -1]
    for(let i = 0; i < nums.length ; i++){
        if(nums[i] === target){
            position[0] = i
            break
        }
    }
    for (let i = nums.length - 1; i >= 0; i--){

        if (nums[i] === target){
            position[1] = i
            break
        }
    }

    return position
};
console.log(searchRange([5,7,7,8,8,10], 8))