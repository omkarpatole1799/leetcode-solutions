/*
* 744. Find Smallest Letter Greater Than Target (Link: https://leetcode.com/problems/find-smallest-letter-greater-than-target/)
* You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically (alphabetically) greater than target. If such a character does not exist, return the first character in letters.

Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:
Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
*/

const nextGreatestLetter = function(letters, target) {
    let start = 0
    let end = letters.length - 1
    while (start <= end){
        let middleIndex = Math.floor((start + end ) / 2)

        if (target < letters[middleIndex]){
            end = end - 1
        } else if (target > letters[middleIndex]){
            start = start + 1
        }
    }
    if(start === letters.length){
        return letters[0]
    } else {
        return letters[start]
    }
};
console.log(nextGreatestLetter(["c","f","j"], target = "d"))