// vue.config.js 本文件的名字是固定的，不能改成其他的 
// 这个文件中的代码改动后 项目需要重启

/*
 * @Description: 配置文件
 */
module.exports = {

    devServer: { // 配置开发服务器
        // proxy: { // 配置代理  解决跨域
        //     '/api': {
        //         target: 'http://47.115.85.237:3000/', // 线上后端地址
        //         changeOrigin: true, //允许跨域
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
        proxy: 'http://47.115.85.237:3000/' // 配置代理  解决跨域
    }
}
