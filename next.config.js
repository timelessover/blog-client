const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');

module.exports = () => withCSS(Object.assign(withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
}),{ cssModules: false }) )