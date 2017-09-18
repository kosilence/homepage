// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
var port = '3000';

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8080,
        autoOpenBrowser: false,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api': {
                target: 'http://localhost:' + port,
                changeOrigin: true
            }
        },
        cssSourceMap: false
    },
    /**
     * 后台配置项
     */
    port: port,
    // MongoDB 配置
    db: 'mongodb://127.0.0.1/cosin',
    // Qiniu 云配置
    qn_config: {
        accessKey: 'your accessKey',
        secretKey: 'your secretKey',
        bucket: 'your bucket name',
        origin: 'your origin site',
        // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
        // 如果在国内，此项请留空
        uploadURL: '',
    },
}
