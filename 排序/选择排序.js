const arr = [1, 35, 3, 4, 78, 8, 12, 5, 18, 4];

const selectSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            // 找到最小值的索引
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 交换
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectSort(arr));
