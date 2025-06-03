class Components {
    _data = { name: "hello" };
    pending = false;
    constructor() {
        this.data = new Proxy(this._data, {
            set: (target, key, value) => {
                this._data[key] = value;
                // 这样写可以实现 nextTick 功能，只有当同步代码执行完后，才会执行 render
                if (!this.pending) {
                    this.pending = true;
                    Promise.resolve().then(() => {
                        this.pending = false;
                        this.render();
                    });
                }
            }
        })
    }

    render() {
        console.log(`renderer - name:${this.data.name}`);
    }
}

const com = new Components();
com.data.name = "world";
com.data.name = "world2";
com.data.name = "第一轮最后一次";

setTimeout(() => {
    com.data.name = "第二轮";
}, 1000);