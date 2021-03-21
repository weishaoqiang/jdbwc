const path = require('path')
const HtmlWebapackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const Swiper = require('swiper')

const SRCPATH = path.resolve(__dirname, 'src')
const config = {
  mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
  entry: {
    index: path.join(SRCPATH, '/pages/index/index.js'),
    jgsz: path.join(SRCPATH, '/pages/bwc-jgsz/jgsz.js'),
    gzdt: path.join(SRCPATH, '/pages/bwc-gzdt/gzdt.js'),
    fwdt: path.join(SRCPATH, '/pages/bwc-fwdt/fwdt.js'),
    zbgz: path.join(SRCPATH, '/pages/bwc-zbgz/zbgz.js'),
    zcfg: path.join(SRCPATH, '/pages/bwc-zcfg/zcfg.js'),
    xcjy: path.join(SRCPATH, '/pages/bwc-xcjy/xcjy.js'),
    xfaq: path.join(SRCPATH, '/pages/bwc-xfaq/xfaq.js'),
    bgxz: path.join(SRCPATH, '/pages/bwc-bgxz/bgxz.js'),

    wenzhang: path.join(SRCPATH, '/pages/bwc-wenzhang/wenzhang.js'),
    templateJs: path.join(SRCPATH, '/static/js/template-js.js'),
    commonscss: path.join(SRCPATH, '/static/css/common.scss'),
  },
  output: {
    path: path.resolve(__dirname, 'bwc/'),
    filename: 'js/[name].js',
    publicPath: process.env.NODE_ENV === 'dev' ? '/bwc' : 'http://www.gxcme.edu.cn/g/bwc/'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.ejs$/,
      loader: 'ejs-compiled-loader',
      options: {
        htmlmin: true,
        htmlminOptions: {
          removeComments: true
        }
      }
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]',
          outputPath: './img',
          publicPath: '/img',
          useRelativePath: true
        }
      }]
    }, {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          interpolate: true,
          minimize: false
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/index/index.ejs'),
      filename: 'index.html',
      chunks: ['index', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-jgsz/jgsz.ejs'),
      filename: 'bwc-jgsz.html',
      chunks: ['jgsz', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-gzdt/gzdt.ejs'),
      filename: 'bwc-gzdt.html',
      chunks: ['gzdt', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-fwdt/fwdt.ejs'),
      filename: 'bwc-fwdt.html',
      chunks: ['fwdt', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-zbgz/zbgz.ejs'),
      filename: 'bwc-zbgz.html',
      chunks: ['zbgz', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-zcfg/zcfg.ejs'),
      filename: 'bwc-zcfg.html',
      chunks: ['zcfg', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-xcjy/xcjy.ejs'),
      filename: 'bwc-xcjy.html',
      chunks: ['xcjy', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-xfaq/xfaq.ejs'),
      filename: 'bwc-xfaq.html',
      chunks: ['xfaq', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-bgxz/bgxz.ejs'),
      filename: 'bwc-bgxz.html',
      chunks: ['bgxz', 'commonscss', 'templateJs'],
      inject: 'head'
    }),


    new HtmlWebapackPlugin({
      template: path.join(SRCPATH, 'pages/bwc-wenzhang/wenzhang.ejs'),
      filename: 'bwc-wenzhang.html',
      chunks: ['wenzhang', 'commonscss', 'templateJs'],
      inject: 'head'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CopyWebpackPlugin({
      patterns: [
      {
        from: path.join(SRCPATH, '/static/img/'),
        to: path.join(__dirname, 'bwc/img/'),
        toType: 'dir'
      }
    ]})
  ],
  devServer: {
    contentBase: path.join(__dirname, 'bwc'),
    compress: true,
    port: 8080,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        //打包公共模块
        commons: {
          chunks: 'initial', //initial表示提取入口文件的公共部分
          minChunks: 2, //表示提取公共部分最少的文件数
          minSize: 0, //表示提取公共部分最小的大小
          name: 'commons' //提取出来的文件命名
        }
      }
    }
  }
}

module.exports = config