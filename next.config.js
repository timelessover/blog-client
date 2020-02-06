const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

module.exports = () => withCSS(Object.assign(withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: (config) => {
        if (!config.plugins) config.plugins = [];
        config.plugins.push(
            new TypedCssModulesPlugin({
                globPattern: 'components/**/*.scss',
            }),
        )
        return config;
    }
}),{ cssModules: false }) )