// 求笛卡尔积
// 笛卡尔积是一种数学运算，它表示从两个或多个集合中取元素，然后将它们进行组合形成新的集合。

const arr = [
    ["戴尔", "苹果", "华为", "小米", "联想", "三星", "索尼", "宏碁", "惠普", "微软"],
    ["笔记本", "平板电脑", "台式机", "一体机", "工作站"],
    ["黑色", "白色", "银色", "金色"],
]

const fn = (arr) => {
    let result = [[]];

    // 两两合并 不断更新 result 的值
    const fn2 = (preList, curs) => {
        const dtoRefs = [];
        preList.forEach(pre => {
            curs.forEach(cur => {
                dtoRefs.push([...pre, cur]);
            })
        });
        result = dtoRefs;
    }

    // 有多少行就合并多少次
    for (let i = 0; i < arr.length; i++) {
        fn2(result, arr[i]);
    }

    return result.map(item => item.join("-"));
}

console.log(fn(arr))