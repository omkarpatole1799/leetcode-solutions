def linearSearchStr(str, target):
    str = str.lower()
    target = target.lower()
    count = -1
    if(str == ''):
        return
    for i in str:
        count = count + 1
        if(i == target):
            return count

print(linearSearchStr("omkar", 'k'))