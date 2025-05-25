// 累加
[1, 2, 3, 4, 5].reduce((pre, cur) => {
    return pre + cur;
});

// 找最大值
[1, 2, 3, 4, 5].reduce((pre, cur) => {
    return Math.max(pre, cur);
});

// 数组去重
[1, 2, 1, 2, 1, 3, 3, 4, 4].reduce((pre, cur) => {
    if (!pre.includes(cur)) {
        pre.push(cur);
    }
    return pre;
}, []);

// 字符串反转
Array.from("hello world").reduce((pre, cur) => {
    return `${cur}${pre}`;
});