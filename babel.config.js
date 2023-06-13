// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true,
      targets: {
        ios: '12', //默认而言 Taro 会兼容所有 @babel/preset-env 支持的语法，并兼容到 iOS 9 和 Android 5，如果你不需要那么高的兼容性，或者不需要某些 ES2015+ 语法支持，可以自行配置 babel.config.js 达到缩小打包体积效果。
      },
    }]
  ]
}
