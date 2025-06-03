function setPathValue(obj, paths, value) {
    if (!Array.isArray(paths)) paths = [paths];
    let resObj = obj;
    paths.forEach((key, index) => {
        if (index === paths.length - 1) {
            resObj[key] = value;
            return;
        }
        resObj = resObj[key];
    });
    return resObj;
}

const obj = {
    a: {
        b: {
            f: 5
        },
        c: {
            d: 1,
            e: 2
        }
    }
};

console.log(obj.a.b.f);
setPathValue(obj, ['a', 'b', 'f'], 1000);
console.log(obj.a.b.f);