module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ 
       test: /\.css$/,
       exclude: /node_modules/,
       loader: ['style-loader' , 'css-loader']
      }]
  },  
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }  
}