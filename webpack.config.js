const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bcp-core.bundle.js',
    libraryTarget: "umd",
    library:"bcp-core"
  },
   resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
     	{ 
     		test: /\.ts$/, 
     		loader: 'ts-loader',
        exclude: [/\.(spec)\.ts$/]
    	}
    ]
  }
};