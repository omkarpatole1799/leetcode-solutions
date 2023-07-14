def linearSearchArr(arr, target):
    if (len(arr) == 0):
        return 
    for i in range(len(arr)):
        if (arr[i] == target):
            return i
        
print(linearSearchArr([1,3,11,3,22], 22))
