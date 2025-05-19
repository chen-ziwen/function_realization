import fs from "fs";
import path from "path";
import Router from "koa-router";

/*
强缓存：

Cache-Control有一些常设置的值
private：仅浏览器可以缓存（默认值）；
public：浏览器和代理服务器都可以缓存；
max-age=xxx：过期时间单位秒；
no-cache：不进行强缓存；
no-store：不强缓存，也不协商缓存）
*/


// 获取资源
const getResoure = (ctx) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(ctx.rootPath, 'fs', 'a.txt'), (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
};

const router = new Router();

router.get("/nego", async (ctx) => {
    // 设置响应头 Cache-Control 设置强缓存，过期时间为20秒
    ctx.set('Cache-Control', 'max-age=20');
    ctx.body = await getResoure(ctx);
});

export default router;