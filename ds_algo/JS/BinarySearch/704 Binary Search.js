const search = function(nums, target) {
    let start = 0
    let end = nums.length - 1

    while (start <= end){
        let middleIndex = Math.floor((start + end) / 2)

        if (target === nums[middleIndex]){
            return middleIndex
        }
        if (target < nums[middleIndex]){
            end = end - 1
        }
        if (target > nums[middleIndex]){
            start = start + 1
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 9))