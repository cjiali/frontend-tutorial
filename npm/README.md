# [NPM](https://docs.npmjs.com/)

**创建文件（夹）**

```bash
touch .npmrc
```

**编辑 `.npmrc`**

```toml
; 国内加速 npm install
; 使用淘宝镜像源
registry="https://registry.npm.taobao.org"
; 为特定依赖库指定镜像源
sass_binary_site="https://npm.taobao.org/mirrors/node-sass/"
phantomjs_cdnurl="http://cnpmjs.org/downloads"
electron_mirror="https://npm.taobao.org/mirrors/electron/"
sqlite3_binary_host_mirror="https://foxgis.oss-cn-shanghai.aliyuncs.com/"
profiler_binary_host_mirror="https://npm.taobao.org/mirrors/node-inspector/"
chromedriver_cdnurl="https://cdn.npm.taobao.org/dist/chromedriver"
```