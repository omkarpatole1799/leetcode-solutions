/*
1672. Richest Customer Wealth (Link: https://leetcode.com/problems/richest-customer-wealth/)
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17


steps: 
1) consider first element of array an max weatlh (like array[0][0] = max value)
2) itrate over the 2d Arrary (here two loop required because outer loop run over rows and innter loop will run over columns)
    in itration add the elements at [i][j] positions
3) compare with max wealth (initially set to zero) if greater than zero then update maxWealth to new value
4) return the max wealth value / amount
*/ 

function maximumWealth(accounts){
    let maxWealth = accounts[0][0]
    
    accounts.forEach((element,i) => {
        let sumWealth = 0
        element.forEach((el,j)=>{
            sumWealth = sumWealth + accounts[i][j]            
        })    
        if(sumWealth > maxWealth){
            maxWealth = sumWealth
        }
    });

    return maxWealth
}

console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));

