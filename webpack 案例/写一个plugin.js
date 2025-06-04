// 创建 my-plugin
// 更细节的各种写法需要去查看官网
module.exports = class BundleReportPlugin {
    constructor(options) {
        this.options = options || {};
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('BundleReportPlugin', (compilation, callback) => {
            const timestamp = new Date().toLocaleString();
            const moduleCount = Object.keys(compilation.modules).length;

            const reportContent = `
                Bundle Report
                Timestamp: ${timestamp}
                Module Count: ${moduleCount}`;

            compilation.assets['bundle-report.txt'] = {
                source: () => reportContent,
                size: () => reportContent.length
            };

            callback();
        })
    }
}

// 使用 my-plugin
import BundleReportPlugin from './my-plugin';

module.exports = {
    // 其他配置...
    plugins: [
        new BundleReportPlugin()
    ]
}