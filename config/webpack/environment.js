const { environment } = require('@rails/webpacker')
#2-7行目をコメントアウト
// const { VueLoaderPlugin } = require('vue-loader')
// const vue = require('./loaders/vue')

// environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
// environment.loaders.prepend('vue', vue)
// environment.config.resolve.alias = {'vue$': 'vue/dist/vue.esm.js' }
#ここまで

const webpack = require('webpack')
environment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery'
    })
)
module.exports = environment