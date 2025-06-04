// 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

class Singleton {
    constructor() {
        this.instance = null;
    }

    getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

const singleton = new Singleton();
const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

// 获取的是同一个实例
console.log(instance1 === instance2); // true