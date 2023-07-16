def linearSearchArr(arr, target):
    if (len(arr) == 0):
        return 
    for i in range(len(arr)):
        if (arr[i] == target):
            return i
        


def linearSearch2DArr(arr, target):
    colIndex = 0
    rowIndex = 0
    for i in range(len(arr)):
        colIndex += 1
        for j in arr[i]:
            print(j)
            if(arr[i][j] == target):
                return colIndex, rowIndex


if '__main__' == '__main__':
    # print(linearSearchArr([1,3,11,3,22], 22))
    print(linearSearch2DArr([[4,2,1], [1,2,3,10]], 10))
