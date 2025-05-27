const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const shuffleArray = (arr) => {
    const shuffled = [...arr]; // 创建一个新数组以避免修改原数组
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // 随机索引
        // 交换元素
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

console.log("Shuffled Array ===>", shuffleArray(arr));