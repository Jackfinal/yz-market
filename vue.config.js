let pageMethod = require('./src/util/getPages.js');
let pages = pageMethod.pages();
console.log('pages',pages)

module.exports = {
    configureWebpack: config => {
        // Deleting default entry
        delete config.entry.app
    },
    lintOnSave: false, //禁用eslint
    publicPath: process.env.NODE_ENV === 'production'
        ? '/yz-market/'
        : '/',
    productionSourceMap: false,
    pages,
}
