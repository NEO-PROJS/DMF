const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: "static/desktop",
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    music: {
      entry: 'src/music.js',
      template: 'public/music.html',
      filename: 'music.html',
      title: 'Music Page',
      chunks: ['chunk-vendors', 'chunk-common', 'music']
    },
    account: {
      entry: 'src/account.js',
      template: 'public/account.html',
      filename: 'account.html',
      title: 'Account Page',
      chunks: ['chunk-vendors', 'chunk-common', 'account']
    }
  },
})
