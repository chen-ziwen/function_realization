const arr = [1, 2, 3, 4, 4, 5, 6, 5, 6, 1];

// 1 set去重
const uniqueArr = [...new Set(arr)];

// 2. filter 去重
const uniqueArr2 = arr.filter((value, idx, self) => self.indexOf(value) === idx);

// 3. for去重
const uniqueArr3 = [].concat(arr);
for (let i = 0; i < uniqueArr3.length; ++i) {
    for (let j = i + 1; j < uniqueArr3.length; ++j) {
        if (uniqueArr3[i] == uniqueArr3[j]) {
            uniqueArr3.splice(j, 1);
        }
    }
}

// 4. reduce + includes
const uniqueArr4 = arr.includes((pre, cur) => {
    if (!pre.includes(cur)) {
        pre.push(cur);
    }
    return pre;
}, [])

console.log(uniqueArr, uniqueArr2, uniqueArr3, uniqueArr4);
