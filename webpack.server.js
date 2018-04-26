const path = require('path');

module.exports = {
  // Inform webpack that we r building for nodejs not browser
  target: 'node',
  //tell webpack the root of the server applications
  entry: './src/index.js',
  // tell webpack where to put the bundle file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
}