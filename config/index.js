import path from 'path';

const Timestamp = new Date().getTime();

const config = {
  projectName: 'myApp',
  date: '2023-6-13',
  designWidth (input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375
    }
    // 全局使用 Taro 默认的 750 尺寸
    return 750
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  // outputRoot: `dist/${process.env.TARO_ENV}`, // 微信小程序编译后的目录就会是 dist/weapp，H5 编译后目录就会是 dist/h5
  outputRoot: 'dist',
  plugins: [
    '@tarojs/plugin-html'  // 支持使用 HTML 标签
  ],
  
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: false
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  // 小程序端专用配置
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // webpackChain (chain, webpack) {
    //   // 打包体积分析
    //   chain.plugin('analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    // }
  },
  // H5 端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 自定义js文件名(打包后自动刷新)
    output: {
      filename: `js/[name].[hash:8].${Timestamp}.js`,
      chunkFilename: `js/[name].[chunkhash:8].${Timestamp}.js`
    },
    // 自定义css文件名
    miniCssExtractPluginOption: {
      filename: `css/[name].[hash].${Timestamp}.css`,
      chunkFilename: `css/[name].[chunkhash].${Timestamp}.css`,
    },
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
