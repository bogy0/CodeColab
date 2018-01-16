const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
              presets: ['es2015', 'react']
          }
        }]
    },
};
