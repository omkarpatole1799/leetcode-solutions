/*
* 349. Intersection of Two Arrays (Link: https://leetcode.com/problems/intersection-of-two-arrays/description/)
* Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.



Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/


const intersection = function(nums1, nums2) {
    let interSectArr = []
    for (let i= 0; i < nums1.length; i++ ) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (!(interSectArr.includes(nums1[i]))){
                    interSectArr.push(nums1[i])
                }
            }
        }
    }
    return interSectArr
}

console.log(intersection([1,2,2,1], [2,2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))
