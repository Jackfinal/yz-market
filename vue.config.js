let pageMethod = require('./src/util/getPages.js');
pages = pageMethod.pages();
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