// 实现 some
Array.prototype.mySome = function(callbackfn, thisArg) {
    // 1. 类型检查
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + ' is not a function');
    }

    // 2. 转换为对象
    const O = Object(this);

    // 3. 获取长度
    const len = O.length >>> 0;

    // 4. 空数组直接返回 false
    if (len === 0) {
        return false;
    }

    // 5. 遍历处理
    for (let i = 0; i < len; i++) {
        // 检查索引是否存在
        if (i in O) {
            // 使用 call 绑定 thisArg
            if (callbackfn.call(thisArg, O[i], i, O)) {
                return true;
            }
        }
    }

    return false;
};

// 测试案例
const obj = [
    { name: 'chiko', age: 119 },
    { name: 'angle', age: 566 },
    { name: 'uzi', age: 30 }
];

// 1. 只要有一个值大于 100
const bage = obj.mySome((item) => item.age > 100)
console.log(bage)

// 2. 只要有一个值大于 1000
const sage = obj.mySome(item => item.age > 1000)
console.log(sage)
