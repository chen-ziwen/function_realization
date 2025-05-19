import Koa from 'koa';
import routerInit from './routers/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建 Koa 实例
const app = new Koa();

// 设置全局变量
app.context.rootPath = __dirname;

// 读取路由文件夹下的所有路由文件
routerInit(app);

// 开启服务器
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});