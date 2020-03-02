const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'
// 打包之后若要打开项目，需安装npm install http-server -g，在dist文件夹下启动 http-server
module.exports = {
    publicPath: BASE_URL,
    outputDir: 'dist', // 打包生成的生产环境构建文件的目录
    assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
    indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
    pages: undefined, // 构建多页
    productionSourceMap: false, // 开启 生产环境的 source map?
    chainWebpack: config => {
        // 配置路径别名
        config.resolve.alias
            .set('@', resolve('src'))
    },
    css: {
        modules: false, // 启用 CSS modules
        extract: true, // 是否使用css分离插件
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: { // css预设器配置项y
            scss: {
                data: `@import "~@/assets/styles/mixin.scss";`
            }
          } 
    },
    devServer: {
        port: 80, // 端口
        proxy: 'http://www.99-yinhe.com/' // 设置代理
    }
}

