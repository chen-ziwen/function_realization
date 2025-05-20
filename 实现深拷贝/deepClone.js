// 实现一个简单的深拷贝
function deepClone(o) {
    // 如果是基本数据类型直接返回
    if (typeof o !== 'object' || o === null) {
        return o;
    }

    // 判断是对象还是数组 生产基本容器
    const obj = Array.isArray(o) ? [] : {};

    for (let key of o) {
        if (o.hasOwnProperty(key)) {
            obj[key] = deepClone(o[key]);
        }
    }

    return obj;
}