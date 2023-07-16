def min_num_in_arr(arr):
    if (len(arr) == 0):
        return 
    
    minNum = arr[0]
    maxNum = arr[0]
    for i in range(len(arr)):
        if(arr[i] < minNum):
            minNum = arr[i]
        if(arr[i] > maxNum):
            maxNum = arr[i]

    return minNum, maxNum

print(min_num_in_arr([11,4,1100,3, -1, -99, 99, 454]))