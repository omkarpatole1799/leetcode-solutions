const maximumCount = function(nums) {
    let posCount = 0
    let negCount = 0
    let maxNum = 0
    for (let i of nums){
        if (i > 0){
            posCount += 1
        }
        if (i < 0){
            negCount += 1
        }
    }

    if (posCount > negCount){
        maxNum = posCount
    }
    else {
        maxNum = negCount
    }
    return maxNum
};


const testCases = [[-2,-1,-1,1,2,3],
    [-3,-2,-1,0,0,1,2],
    [5,20,66,1314]]

for (let i in testCases){
    console.log(maximumCount(testCases[i]))
}
