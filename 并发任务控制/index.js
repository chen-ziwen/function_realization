// 并发控制一次性最多执行几个异步操作

class SuperTask {
    constructor(data) {
        // 一次可以执行的并发操作个数
        this.poolSize = data.poolSize || 2;
        // 记录当前正在执行的操作格式
        this.runningTaskCount = 0;
        // 等待执行的操作
        this.waitting = [];
    }

    add(fn) {
        return new Promise((resolve, reject) => {
            this.waitting.push({ fn, resolve, reject });
            this.runTask();
        });
    }

    setPoolSize(size) {
        this.poolSize = size;
        this.runTask();
    }

    runTask() {
        while (this.waitting.length > 0 && this.runningTaskCount < this.poolSize) {
            const { fn, resolve, reject } = this.waitting.shift();
            this.runningTaskCount++;
            fn().then(() => {
                resolve();
                this.runningTaskCount--;
                this.runTask();
            }).catch(() => {
                reject();
            });
        }
    }
}

const superTask = new SuperTask({ poolSize: 2 });

async function timeout(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    })
}

function addTask(time, name) {
    const label = `任务${name}，完成！`;
    console.time(label);
    superTask.add(() => timeout(time)).then(() => {
        console.timeEnd(label);
    })
}

addTask(10000, 1); // 10s 后输出： 任务1完成
addTask(5000, 2); // 5s 后输出： 任务2完成
addTask(3000, 3);  // 8s 后输出： 任务3完成
addTask(4000, 4); // 11s 后输出： 任务4完成
addTask(5000, 5); // 12s 后输出： 任务5完成
setTimeout(() => { superTask.setPoolSize(5) }, 7000);

/* 真实输出：
任务2，完成！: 5.008s
任务3，完成！: 8.012s
任务1，完成！: 10.002s
任务4，完成！: 11.022s
任务5，完成！: 12.020s  
 */