"use strict";

//使用module到处对象，这个对象就是webpack的配置

/**
 * 1.打包的入口文件
 * 2.打包的出口文件
 */
//导入path模块（便可以使用path.resolve(__)....类似于创建对象，使用方法
var path = require('path'); //导入html-webpack-plugin插件


var HtmlWebpackPlugin = require('html-webpack-plugin'); //导入clean-webpack-plugin


var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin; //引入vue-loader插件(导入之后再打包规则后进行插件的配置详见文档：https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE)


var VueLoaderPlugin = require('vue-loader/lib/plugin'); //导入webpack


var webpack = require('webpack');

module.exports = {
  //模式
  mode: 'development',
  //打包的入口文件
  entry: './src/main.js',
  devtool: 'cheap-module-eval-source-map',
  //打包的出口文件
  output: {
    filename: 'main.js',
    //出口文件名（即打包后生成的文件）
    path: path.resolve(__dirname, '/dist') //__dirname表示当前目录下的绝对路径，'dist'表示绝对路径下目录

  },
  //打包规则
  module: {
    //打包规则可以有很多，每个定义数组里的一个对象
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        limit: 2048
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.styl(us)?$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  devServer: {
    //指定服务器根目录
    contentBase: './dist',
    //自动打开浏览器
    open: true,
    //启用热模块替换
    hot: true
  },
  //插件的配置均在这里（也是数组，数组元素为每个插件对象
  plugins: [// 请确保引入这个插件来施展魔法
  new VueLoaderPlugin(), //实例化
  new HtmlWebpackPlugin({
    template: './index.html'
  }), new CleanWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, './src'),
      'styles': path.resolve(__dirname, './src/assets/styles'),
      'images': path.resolve(__dirname, './src/assets/images')
    }
  }
};