function myInstanceOf(obj, constructor) {
    if (typeof constructor !== 'function') {
        throw new TypeError('Right-hand side of `instanceof` is not callable')
    }

    if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
        return false;
    }

    let proto = obj.getPrototypeOf(obj);

    while (proto !== null) {
        if (proto === constructor.prototype) {
            return true;
        }
        proto = proto.getPrototypeOf(proto);
    }

    return false;
}