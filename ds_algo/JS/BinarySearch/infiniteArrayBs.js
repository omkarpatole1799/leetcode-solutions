function infiniteArrayBs(array, target) {
    let start = 0
    let end = 1
    while (target >= array[end]) {
        let newStart = end
        end = end * 2 + 1
        // end = end + (end - start) * 2
        start = newStart
    }
    return binarySearch(array, target, start, end)
}

function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1

    while (start <= end) {
        let middleElement = Math.floor((start + end) / 2)
        if (target < array[middleElement]) {
            end = end - 1
        }
        if (target > array[middleElement]) {
            start = start + 1
        }
        if(target === array[middleElement]){
            return middleElement
        }
    }
    return "not found"
}

const myArr = [1,2,3,4,5,6,7,8,9,11,12,34,39, 40, 55,57,67,69,71,73,75]
console.log(infiniteArrayBs(myArr, 40))

// const myArr2 = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170]
// for (let i = 1; i< myArr2.length; i++){
//     // console.log(infiniteArrayBs([1,2,3,4,5,6,7,8,9,11,12,34,39, 40, 55,57,67,69,71,73,75], myArr[i]))
//     console.log(infiniteArrayBs( myArr2, myArr2[i] ))
// }

