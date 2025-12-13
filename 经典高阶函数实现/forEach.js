// 实现 forEach
Array.prototype.myForEach = function(callbackfn, thisArg) {
    // 1. 类型检查
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + ' is not a function');
    }

    // 2. 转换为对象
    const O = Object(this);

    // 3. 获取长度
    const len = O.length >>> 0;

    // 4. 遍历处理
    for (let i = 0; i < len; i++) {
        // 检查索引是否存在
        if (i in O) {
            // 使用 call 绑定 thisArg
            callbackfn.call(thisArg, O[i], i, O);
        }
    }

    // forEach 总是返回 undefined
};

// 测试案例
const fruits = ['apple', 'banana', 'orange'];

// 1. 打印每个水果
fruits.myForEach((fruit) => {
    console.log('水果:', fruit);
});

// 2. 带索引打印
fruits.myForEach((fruit, index) => {
    console.log(`索引 ${index}: ${fruit}`);
});

// 3. 使用 thisArg
const obj = {
    prefix: '水果:',
    log: function(value) {
        console.log(this.prefix, value);
    }
};
fruits.myForEach(obj.log, obj);

// 4. 修改原数组的元素
const numbers = [1, 2, 3, 4];
numbers.myForEach((num, index, arr) => {
    arr[index] = num * 2;
});
console.log('修改后的数组:', numbers); // [2, 4, 6, 8]

// 5. 求和（forEach 不返回值，需要外部变量）
let total = 0;
[1, 2, 3, 4, 5].myForEach(num => {
    total += num;
});
console.log('总和:', total); // 15

// 6. 创建对象数组
const keys = ['name', 'age', 'city'];
const values = ['Alice', 25, 'New York'];
const result = {};
keys.myForEach((key, index) => {
    result[key] = values[index];
});
console.log('构建的对象:', result); // { name: 'Alice', age: 25, city: 'New York' }

// 7. 遍历类数组对象
function example() {
    arguments.myForEach((arg, index) => {
        console.log(`参数 ${index}:`, arg);
    });
}
example('a', 'b', 'c');

// 8. 链式操作（forEach 返回 undefined，不能链式调用）
const chained = [1, 2, 3];
const chainedResult = chained
    .map(x => x * 2) // [2, 4, 6]
    .filter(x => x > 3); // [4, 6]

chainedResult.myForEach(x => {
    console.log('链式操作结果:', x);
});

// 9. 处理稀疏数组
const sparse = [1, , 3, , 5];
console.log('稀疏数组:', sparse); // [1, empty, 3, empty, 5]
sparse.myForEach((value, index) => {
    console.log(`稀疏数组索引 ${index}:`, value);
}); // 只会打印索引 0, 2, 4

// 10. 退出循环（forEach 不能用 break，但可以用 throw）
const tryBreak = [1, 2, 3, 4, 5];
try {
    tryBreak.myForEach(value => {
        if (value === 3) {
            throw '找到3，退出循环';
        }
        console.log('值:', value);
    });
} catch (e) {
    if (e !== '找到3，退出循环') throw e;
}