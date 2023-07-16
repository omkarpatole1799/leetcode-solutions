/*
1295. Find Numbers with Even Number of Digits (Link: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/ )
Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
*/

/*
steps: 
1) get every number from array
2) make a function to count the totoal digits of the nubmer (we can do by dividing the number unitil it becomes zero, use while loop )
3) check if total digits are even (this can be done by % operator if num % 2 == 0 then even number )
4) return the count of total even number digits
*/ 

const findNumbers = (nums) => {
    function checkNum(value){
        let count = 0
        while (value > 0){
            count = count + 1
            value = Math.floor(value / 10)
        }
        if(count % 2 == 0){
            return true
        }
    }
    let c = 0
    for (let [index, value] of nums.entries()) {
        const i = checkNum(value)
        if(i){
            c++
        }
    }
    console.log(c);
}
findNumbers([12, 345, 2, 6, 7896])
findNumbers([555,901,482,1771])