// 实现降级采样 根据step去降级对应的数据
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

const downSameple = (data, step) => {
    const res = []
    for (let i = 0; i < data.length; i += step) {
        let sum = 0;
        for (let j = i; j < Math.min(i + step, data.length); j++) {
            sum += data[j];
        }
        res.push(sum / (Math.min(i + step, data.length) - i));
    }
    return res;
}

console.log(downSameple(data, 5));