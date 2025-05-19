import fs from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 路由集合
const routerInit = async (app) => {
    const files = fs.readdirSync(__dirname);
    for (const file of files) {
        if (file !== "index.js") {
            const { default: route } = await import(`./${file}`);
            app.use(route.routes()).use(route.allowedMethods());
        }
    }
}

export default routerInit;