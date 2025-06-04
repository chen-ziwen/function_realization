const arr = [1, 35, 3, 4, 78, 8, 12, 5, 18, 4];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log('arr ===>', bubbleSort(arr));

// 优化冒泡
// 如果某一轮没有发生交换，说明已经排好序了，直接返回
const bubbleSortOptimize = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        if (!flag) break;
    }

    return arr;
}

console.log('arr ===>', bubbleSortOptimize(arr));
