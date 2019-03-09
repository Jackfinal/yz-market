module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: false, //禁用eslint
    publicPath: 'http://rap2api.taobao.org/app/mock/7058',
    productionSourceMap: false,
    pages: {
        index: {
            // page 的入口
            entry: 'src/pages/index/main.js',
            // 模板来源
            template: 'src/pages/index/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            title: 'index',
        },
        cart: {
            // page 的入口
            entry: 'src/pages/cart/main.js',
            // 模板来源
            template: 'src/pages/cart/index.html',
            // 在 dist/index.html 的输出
            filename: 'cart.html',
            title: 'cart',
        },
    }
}