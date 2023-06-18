const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {
  return {
    entry: "./src/app.js",
    mode: env.production ? "production" : "development",
    devtool: env.production ? false : "inline-source-map",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      hot: true,
      liveReload: false,
      open: true,
      port: 9000,
      devMiddleware: {
        writeToDisk: true,
      },
      // proxy: {
      //   "/": {
      //     target: "http://localhost:3000",
      //   },
      // },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, /*"style-loader",*/ "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        inject: "body",
      }),
      new MiniCssExtractPlugin({
        filename: "main.css",
      }),
    ],
    optimization: {
      minimizer: env.production
        ? [
            new TerserPlugin({ extractComments: false }),
            new CssMinimizerPlugin(),
          ]
        : [],
    },
  };
};
