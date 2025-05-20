class EmmiterEvent {
    constructor() {
        this.events = {};
        // 针对once事件的处理 记录每个事件的触发状态
        this.eventsSwitch = {};
    }

    on(name, fn) {
        if (!this.events[name]) {
            this.events[name] = []
        }
        this.events[name].push(fn);

        // 返回一个注销函数 类似于 vue 的 watch
        return () => {
            this.off(name, fn);
        }
    }

    emit(name, ...args) {
        if (!this.events[name]) return;
        this.events[name].forEach(fn => {
            fn.apply(this, args);
        })
    }

    remove(name) {
        if (this.events[name]) {
            delete this.events[name];
        }
    }

    off(name, fn) {
        if (this.events[name]) {
            this.events[name] = this.events[name].filter(item => item !== fn);
        }
    }

    once(name, fn) {
        if (!this.events[name]) return;
        if (!this.eventsSwitch[name]) {
            this.eventsSwitch[name] = true;
        } else {
            this.eventsSwitch[name] = false;
        }

        // 如果该名称事件添加过 后续不再添加
        if (!this.eventsSwitch[name]) return;

        // 如果事件已经触发过了 就不再执行
        this.events[name].push((...args) => {
            if (this.eventsSwitch[name]) {
                fn.apply(this, args);
            }
        });

        return () => {
            this.off(name, fn);
        }
    }
}