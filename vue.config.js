const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       pathRewrite: {
  //         '^/api': '/static/mock'
  //       }
  //     }
  //   }
  // },
  transpileDependencies: true,
  // 设置路径别名
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('styles', path.join(__dirname), './src/styles')
  // }
})
