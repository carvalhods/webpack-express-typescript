const root = require('app-root-path').path;

module.exports = {
  entry: `${root}/bin/www.ts`,
  externals: [
      /^[a-z\-0-9]+$/ // Ignore node_modules folder
  ],
  output: {
    filename: './bundle.js',
    path: `${root}/build`,
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  module: {
    loaders: [
      { test: /.ts$/, loader: 'ts-loader' }
    ]
  }
}
