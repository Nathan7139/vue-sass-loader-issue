const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "./style.scss" as *; $test: ${process.env.VUE_APP_TEST};`
      }
    }
  },
})
