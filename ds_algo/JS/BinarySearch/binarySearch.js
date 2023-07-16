function binarySearch(array, target){
    let start = 0
    let end = array.length - 1
    while (start <= end){
        let midPoint = Math.floor((start + end) / 2)
        if(target < array[midPoint]){
            end = end -1
        } else if(target > array[midPoint]){
            start = start + 1
        } else{
            return midPoint
        }
    }
    return "not found"
}

console.log(binarySearch([1,2,5,6,7,8,99,144,565,899], 99))