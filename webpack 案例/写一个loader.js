// 创建 my-loader
// 1. 导出一个函数，该函数接收源代码作为参数
module.exports = function (source) {
    // 2. 执行你的转换逻辑
    // 这里我是用正则表达式将所有的 console.log 替换成空字符串
    const modifiedSource = source.replace(/console\.log\((.+?)\);??/g, '');
    // 3.返回转换后的源代码
    return modifiedSource;
}

// 使用 my-loader
module.exports = {
    // 其他配置...
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'my-loader' // 这里的 my-loader 就是你自己的 loader 的名称
            }
        ]
    }
}