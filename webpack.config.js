const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
    //   {
    //     test: /\.jsx?$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //     query: {
    //         presets: ['@babel/preset-react', 'babel-preset-es2015']
    //     }
    // },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
    },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {},
              },
            ],
          },
        {
            test: /\.(otf|ttf|woff2?|eot|svg)(\?.*)?$/, 
            use: [ 'file-loader?name=fonts/[name].[ext]' ] 
        },
    ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};