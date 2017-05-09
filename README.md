在jsx的style标签写css

jsx中可以写入style标签，标签里面写css
默认生成的css文件名称是style-jsx-loader.css
webpack配置方法
```
var path = require('path');

module.exports= {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolveLoader: {
    alias: {
      'style-jsx-loader': path.join(__dirname, 'index')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude:/node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          },
          {
            loader: 'style-jsx-loader',
            options: {
              entry: path.resolve(__dirname, 'main.js') 
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}
```
查询参数entry配置入口文件地址
在入口文件
```
import './style-jsx-loader.css';
```