module.exports = {
  entry: {
    app: [/*'webpack/hot/dev-server',*/ './src/app.js']
  },
  output: {
    path: './app',
    filename: 'index.js',
    publicPath: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.css$/,
        loader: 'style!css?modules',
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
}