const urinalToUse = ocuppiedUrinals => {
    if (ocuppiedUrinals[3-1] == true) {
        return [1]
    }
    return [1, 2, 3, 4]
}