const twoSum = function(nums, target) {
    let indexes = []
    for (let i = 0; i < nums.length ; i++){
        for (let j= i+1; j < nums.length; j ++){
            if ( (nums[i] + nums[j]) === target){
                indexes[0] = i
                indexes[1] = j
            }
        }
    }
    return indexes
};

const testCases =[
    {case: [2,7,11,15] , target: 9 },
    {case: [3,2,4] , target: 6 },
    {case: [3,3] , target: 6 },
]

for (let i in testCases){
    console.log(twoSum(testCases[i].case, testCases[i].target))
}