// 实现 filter
Array.prototype.myFilter = function(callbackfn, thisArg) {
    // 1. 类型检查
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + ' is not a function');
    }

    // 2. 转换为对象
    const O = Object(this);

    // 3. 获取长度
    const len = O.length >>> 0;

    // 4. 创建新数组用于存储结果
    const result = [];

    // 5. 遍历处理
    for (let i = 0; i < len; i++) {
        // 检查索引是否存在
        if (i in O) {
            const value = O[i];
            // 使用 call 绑定 thisArg
            if (callbackfn.call(thisArg, value, i, O)) {
                // 将符合条件的元素添加到结果数组
                result.push(value);
            }
        }
    }

    return result;
};

// 测试案例
const obj = [
    { name: 'chiko', age: 119 },
    { name: 'angle', age: 5000 },
    { name: 'uzi', age: 30 }
];

// 1. 过滤名字叫做 chiko 的项目
const names = obj.myFilter((item) => item.name !== 'chiko')
console.log('过滤 chiko 名字', names)

// 2. 过滤年龄小于 100岁 的项目
const ages = obj.myFilter(item => item.age > 100)
console.log('过滤小于 100岁 的年龄', ages)
