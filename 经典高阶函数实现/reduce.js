// 实现 reduce
Array.prototype.myReduce = function(callbackfn, initialValue) {
    // 1. 类型检查
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + ' is not a function');
    }

    // 2. 转换为对象
    const O = Object(this);

    // 3. 获取长度
    const len = O.length >>> 0;

    // 4. 空数组且没有初始值时报错
    if (len === 0 && arguments.length < 2) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    // 5. 设置累加器初始值
    let accumulator;
    let k = 0;

    // 6. 如果有初始值，使用初始值
    if (arguments.length >= 2) {
        accumulator = initialValue;
    } else {
        // 7. 没有初始值时，找第一个存在的元素作为初始值
        let found = false;
        while (k < len && !found) {
            if (k in O) {
                accumulator = O[k];
                found = true;
            }
            k++;
        }

        // 8. 如果数组为空或只包含空位
        if (!found) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
    }

    // 9. 从找到的索引开始遍历
    for (; k < len; k++) {
        if (k in O) {
            // 使用 call 绑定 thisArg，传入累加器、当前值、索引和原数组
            accumulator = callbackfn.call(undefined, accumulator, O[k], k, O);
        }
    }

    return accumulator;
};

// 测试案例
const numbers = [1, 2, 3, 4, 5];

// 1. 计算数组和
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log('数组和:', sum); // 15

// 2. 计算数组乘积
const product = numbers.myReduce((acc, curr) => acc * curr);
console.log('数组乘积:', product); // 120

// 3. 找最大值
const max = numbers.myReduce((acc, curr) => acc > curr ? acc : curr);
console.log('最大值:', max); // 5

// 4. 数组去重
const arr = [1, 2, 2, 3, 3, 3, 4];
const unique = arr.myReduce((acc, curr) => {
    if (!acc.includes(curr)) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log('去重后的数组:', unique); // [1, 2, 3, 4]

// 5. 将二维数组展平
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.myReduce((acc, curr) => acc.concat(curr), []);
console.log('展平后的数组:', flattened); // [1, 2, 3, 4, 5, 6]

// 6. 对象属性求和
const items = [
    { name: 'Apple', price: 0.99 },
    { name: 'Banana', price: 0.59 },
    { name: 'Orange', price: 0.79 }
];
const totalPrice = items.myReduce((acc, item) => acc + item.price, 0);
console.log('总价格:', totalPrice.toFixed(2)); // 2.37

// 7. 字符串反转
const str = 'hello';
const reversed = str.split('').myReduce((acc, char) => char + acc, '');
console.log('反转字符串:', reversed); // olleh