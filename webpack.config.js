module.exports = {
  entry: './src/index.js',
  //we are out putting our public folder
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  //test to see if anything has changed only js files
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
