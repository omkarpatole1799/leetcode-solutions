function orderAgnosticBS(array, target){
    let isAsc = true
    let start = 0
    let end = array.length - 1
    if(array[0] > array[array.length -1]){
        isAsc = false
    }
    while (start <= end){
        let middleIndex = Math.floor((start + end) / 2)

        if(target === array[middleIndex]){
            return middleIndex
        }

        if(isAsc){
            if(target < array[middleIndex]){
                end = end - 1
            } else if(target > array[middleIndex]){
                start = start + 1
            }

        if (!isAsc) {
            if (target < array[middleIndex]) {
                end = end + 1
            } else if (target > array[middleIndex]) {
                start = start - 1
            }
        }
    }
    return "not found"
}

console.log(orderAgnosticBS([1,3,4,5,6,7,8], 3))
console.log(orderAgnosticBS([8,7,6,5,4,3,1], 3))

