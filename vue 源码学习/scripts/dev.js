// 这个文件会帮我们打包 packages 下的模块，最终打包出js文件

// node dev.js (加上要打包的模块名 + 脚本执行模式 + 要打包的格式) = prcess.argv
// 例如 node dev.js reactivity -f esm

import minimist from "minimist";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
// node 中的命令函数通过 process.argv 获取
const args = minimist(process.argv.slice(2)); // 去除前两个参数，拿到命令参数
// 直接获取 import.meta.url 会以 file:// 开头，需要转换为路径,且拿到的是当前文件的路径，而不是文件夹路径
const __filename = fileURLToPath(import.meta.url); // 去除 file:// 开头 并转义
const __dirname = dirname(__filename); // 拿到文件夹路径

const target = args._[0] || "reactivity"; // 打包哪个项目
const format = args.f || "global"; // 打包后的模块规范

console.log('dirname', import.meta.url, __filename, __dirname)

// 开始写打包代码的逻辑
// 入口文件 根据命令行提供的路径来进行解析
const entry = resolve(__dirname, `../packages/${target}/src/index.ts`); // 入口文件