let pageMethod = require('./src/util/getPages.js');
let pages = pageMethod.pages();
console.log('pages',pages)

module.exports = {
    configureWebpack: config => {
        // Deleting default entry
        delete config.entry.app
    },
    lintOnSave: false, //禁用eslint
    publicPath: './',
    productionSourceMap: false,
    pages,
}
