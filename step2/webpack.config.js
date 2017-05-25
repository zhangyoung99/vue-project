module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ 
       test: /\.css$/,
       loader: ['style-loader' , 'css-loader']
      }]
  },  
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }  
}