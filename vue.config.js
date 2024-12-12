//const { defineConfig } = require('@vue/cli-service')
/* module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/vuejs-todo/' : '/'
}) */

  module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuejs-todo/' : '/'
};