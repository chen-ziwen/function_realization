import fs from "fs";
import path from "path";
import Router from "koa-router";

/*
强缓存:

- Cache-Control有一些常设置的值
- private：只允许客户端使用缓存，不允许其他代理服务器进行缓存（默认值）
- public：客户端和代理服务器都可缓存
- max-age=xxx：过期时间单位秒
- no-cache：不进行强缓存 （但仍会使用协商缓存）
- no-store：不强缓存，也不协商缓存，每次都向服务器发送资源请求
*/

// 获取资源
const getResoure = (ctx) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(ctx.rootPath, 'fs', 'a.txt'), (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    })
};

const router = new Router();

/*
浏览器刷新问题：

1. 普通刷新（F5或点击刷新按钮）：
   - 浏览器会发送带有 Cache-Control: max-age=0 的请求
   - 这会强制浏览器与服务器重新验证资源

2. 强制刷新（Ctrl+F5）：
   - 会完全绕过缓存，直接从服务器获取新的资源

3. 正常访问（重新打开页面或通过链接访问）：
   - 会正常使用缓存策略
   - 这种情况下你的强缓存设置会正常工作

所以这不是bug，而是浏览器的标准行为。如果你想测试强缓存是否生效：
1. 访问页面后等待一会（但不要超过max-age时间）
2. 通过重新打开新标签页访问相同URL
3. 或者将页面加入书签，然后通过书签访问
*/

router.get("/strong", async (ctx) => {
    // 设置响应头
    ctx.set({
        // 设置强缓存，过期时间为10秒
        // 强缓存的特点是，在缓存期间，无论客户端是否重新请求，都会使用缓存中的数据，不会向服务器发送请求。
        'Cache-Control': 'max-age=10',
        'Content-Type': 'text/plain; charset=utf-8; charset=utf-8'
    });

    ctx.body = await getResoure(ctx);
});

export default router;