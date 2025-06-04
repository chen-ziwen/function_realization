// worker 子任务
self.onmessage = function () {
    const list = [];
    for (let i = 0; i < 1000000; i++) {
        list.push(Date.now())
    }
    self.postMessage(list.length);
}