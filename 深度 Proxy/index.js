const obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: {
            f: 6,
            g: 5201314
        }
    },
};

// 每当访问指定对象其中的属性时，都会返回一个 `当前访问的是 [key]，值为 [value]`

function deepProxy(obj) {
    return new Proxy(obj, {
        get: (target, key) => {
            const value = target[key];
            if (typeof value !== 'object') {
                console.log(`当前访问的是${key}，值为${value}`);
            } else {
                return deepProxy(value);
            }
        }
    })
}


const resObj = deepProxy(obj);


resObj.a
resObj.b.e.f
resObj.b.e.g
resObj.b.c
