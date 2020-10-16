import path from "path";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json';

import { name } from "./package.json";

const paths = [
    path.join(__dirname, "/src/index.js"), // input
    path.join(__dirname, "/lib"), // output
];

// rollup 配置项
export default {
    input: paths[0],
    output: [
        // 输出 commonjs 规范的代码
        {
            file: path.join(paths[1], "index.js"),
            format: "cjs",
            name,
        },
        // 输出 es 规范的代码
        {
            file: path.join(paths[1], "index.esm.js"),
            format: "esm",
            name,
        },
    ],
    // external: ['lodash'], // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
    // plugins 需要注意引用顺序
    plugins: [
        // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
        commonjs(),

        // 配合 commnjs 解析第三方模块
        resolve({
            // 将自定义选项传递给解析插件
            customResolveOptions: {
                moduleDirectory: "node_modules",
            },
        }),

        babel({
            runtimeHelpers: true,
            // 只转换源代码，不运行外部依赖
            exclude: "node_modules/**",
            // babel 默认不支持 ts 需要手动添加
            // extensions: [".js", ".ts"],
        }),

        json(),
    ],
};