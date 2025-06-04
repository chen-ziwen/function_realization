const arr = [[1, 2], [3, 4], [[5, 6], 7], [8, 9, 10, [11, 12, [13, 14]]]];

// 1. 利用 flat 函数
[].concat(arr).flat(Infinity);

// 2. 利用递归进行数组降维
function flattenArray(arr) {
    const result = [];

    const fn = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                fn(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }

    fn(arr);

    return result;
}

console.log("result ===>", flattenArray(arr));