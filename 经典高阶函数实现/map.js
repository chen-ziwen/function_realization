// 实现 map
Array.prototype.myMap = function(callbackfn, thisArg) {
    // 1. 类型检查
    if (typeof callbackfn !== 'function') {
        throw new TypeError(callbackfn + ' is not a function');
    }

    // 2. 转换为对象
    const O = Object(this);

    // 3. 获取长度
    const len = O.length >>> 0;

    // 4. 创建新数组，长度与原数组相同
    const result = new Array(len);

    // 5. 遍历处理
    for (let i = 0; i < len; i++) {
        // 检查索引是否存在
        if (i in O) {
            // 使用 call 绑定 thisArg，将结果存入新数组
            result[i] = callbackfn.call(thisArg, O[i], i, O);
        }
        // 注意：稀疏数组的空位会保持为 empty
    }

    return result;
};

// 测试案例
const obj = [
    { name: 'chiko', age: 119 },
    { name: 'angle', age: 5000 },
    { name: 'uzi', age: 30 }
];

// 1. 拿到所有名字合集
const names = obj.myMap((item) => item.name)
console.log('名字合集', names)

// 2. 拿到所有的年龄合集，并最终返回 “我今天 age 岁了”
const ages = obj.myMap(item => `我今年 ${item.age} 岁了`)
console.log('年龄字符串合集', ages)
