const path = require('path');

const NODE_ENV =
  process.env.NODE_ENV ?
    process.env.NODE_ENV.trim() :
    'production';

module.exports = {
  entry: {
    index: './src/with-router.js'
  },
  externals: [
    {
      'react': {
        amd: 'react',
        commonjs: 'react',
        commonjs2: 'react',
        root: 'React'
      }
    },
    'react-router'
  ],
  mode: NODE_ENV,
  module: {
    rules: [

      // JavaScript
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    library: 'with-router',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-router': path.resolve(__dirname, './node_modules/react-router')
    }
  },
  watch: NODE_ENV === 'development'
};
