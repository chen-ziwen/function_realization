const curry = (...args1) => {
    let params = args1;

    const addFn = (...args2) => {
        params = [...params, ...args2];
        return addFn;
    }

    addFn.toValue = () => {
        return params.reduce((pre, cur) => {
            return pre + cur;
        }, 0)
    }
}