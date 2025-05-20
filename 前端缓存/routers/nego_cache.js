import fs from "fs";
import path from "path";
import Router from "koa-router";

/*
协商缓存：

1. 第一次请求资源，服务器返回资源和缓存标识
2. 客户端保存资源和缓存标识
3. 下一次请求资源，客户端将缓存标识发送到服务器
4. 服务器判断缓存标识是否过期，如果没有过期，返回304，客户端使用缓存
5. 如果缓存标识过期，返回资源和新的缓存标识
*/

// 获取资源
const getResoure = (ctx) => {
    return new Promise((resolve) => {
        fs.stat(path.join(ctx.rootPath, 'fs', 'a.txt'), (err, stats) => {
            if (err) {
                console.log(err);
            }
            resolve(stats);
        })
    })
};

const router = new Router();

router.get("/nego", async (ctx) => {
    const ifModifiedSince = ctx.request.headers['if-modified-since'];

    const resource = await getResoure(ctx);
    // atime	Access Time	访问时间	
    // 最后一次访问文件（读取或执行）的时间
    // ctime	Change Time	变化时间	
    // 最后一次改变文件（属性或权限）或者目录（属性或权限）的时间
    // mtime	Modify Time	修改时间	
    // 最后一次修改文件（内容）或者目录（内容）的时间

    // 把具体的日期转换为（根据 GMT）字符串
    if (ifModifiedSince == resource.mtime.toGMTString()) {
        ctx.status = 304;
    }
    ctx.set('Last-Modified', resource.mtime.toGMTString());
    ctx.body = resource;
});

export default router;