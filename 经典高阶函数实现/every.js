// 实现 every
Array.prototype.myEvery = function(callbackfn, thisArg) {
    // 1. 类型检查
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + ' is not a function');
    }

    // 2. 转换为对象，处理字符串、类数组等情况
    const O = Object(this);

    // 3. 获取长度
    const len = O.length >>> 0;  // 无符号右移，确保为非负整数

    // 4. 空数组直接返回 true
    if (len === 0) {
        return true;
    }

    // 5. 遍历处理
    for (let i = 0; i < len; i++) {
        // 检查索引是否存在于对象中（跳过稀疏数组的空位）
        if (i in O) {
            // 使用 call 绑定 thisArg，传递正确参数
            const result = callbackfn.call(thisArg, O[i], i, O);
            if (!result) {
                return false;
            }
        }
    }

    return true;
};

// 测试案例
const obj = [
    { name: 'chiko', age: 119 },
    { name: 'angle', age: 566 },
    { name: 'uzi', age: 30 }
];

// 1. 每个年龄都大于 100
const bage = obj.myEvery((item) => item.age > 100)
console.log(bage)

// 2. 每个年龄都小于 1000
const sage = obj.myEvery(item => item.age < 1000)
console.log(sage)
