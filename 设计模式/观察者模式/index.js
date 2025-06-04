// 主题 subject 对象
class Subject {
    constructor() {
        this.observers = [];
    }

    // 注册观察者
    addObserver(observer) {
        this.observers.push(observer);
    }

    // 移除观察者
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // 通知所有观察者
    notify(message) {
        this.observers.forEach(observer => {
            observer.update(message);
        });
    }
}

// 观察者 Observer 对象
class Observer {
    constructor(name) {
        this.name = name;
    }

    // 接收通知并更新状态
    update(message) {
        console.log(`${this.name} 收到通知：${message}`);
    }
}

// 创建主题对象
const subject = new Subject();

// 创建观察者对象
const observer1 = new Observer('观察者1');
const observer2 = new Observer('观察者2');

// 注册观察者
subject.addObserver(observer1);
subject.addObserver(observer2);

// 通知观察者
subject.notify('主题状态发生变化');

// 移除观察者
subject.removeObserver(observer2);

// 再次通知观察者
subject.notify('主题状态再次发生变化');