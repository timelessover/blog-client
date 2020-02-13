
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

const createTypedModules = (path) => {
    return new TypedCssModulesPlugin({
        globPattern: path,
    })
}

module.exports = () => withCSS(Object.assign(withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    postcssLoaderOptions: {
        parser: true,
        config: {
            ctx: {
                theme: JSON.stringify(process.env.REACT_APP_THEME)
            }
        }
    },
    webpack: (config) => {
        if (!config.plugins) config.plugins = [];
        config.plugins.push(
            createTypedModules('pages/**/*.scss')
        )
        config.plugins.push(
            createTypedModules('components/**/*.scss')
        )
        return config;
    }
}), { cssModules: false }))