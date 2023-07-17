// return the floor of the number in given array

const ceilingArr = [2,3,5,9,14,16,18]

function floorArr(array, target){
    let start = 0
    let end = array.length - 1

    while (start <= end){
        let middleIndex = Math.floor((start + end) / 2)

        if(target === array[middleIndex]){
            return array[middleIndex]
        }
        if( target < array[middleIndex]){
            end = end - 1
        }
        if(target > array[middleIndex]){
            start = start + 1
        }
    }
    return array[end]
}

console.log(floorArr(ceilingArr, 15))