module.exports = {
  entry: './src/main',
  output: {
      filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.js[x]?$/,
          exclude: /node_moudles/,
          loader: 'babel-loader',
          options: {
             presets: ["es2015"]
          }        
        },
        {
          test: /\.css$/,
          use: ['style-loader','css-loader']        
        }
    ]
  },
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.common.js'
    }
  } 
}