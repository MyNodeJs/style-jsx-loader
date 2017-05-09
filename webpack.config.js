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