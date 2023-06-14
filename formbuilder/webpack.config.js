const HTMLwebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    resolve: {
      extensions: [".css", ".scss", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // .js and .jsx files
          exclude: /node_modules/, // excluding the node_modules folder
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(sa|sc|c)ss$/, // styles files
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
          loader: "url-loader",
          options: { limit: false },
        },
      ],
    },
    devServer: {
        port: 3030, // you can change the port
      },
      plugins:[
        new ModuleFederationPlugin({
          name: "formbuilder",
          filename: 'remoteEntry.js',
          exposes: {
            './Formbuilder': './src/bootstrap'
          }
        }),
        new HTMLwebpackPlugin({
            template: './public/index.html'
        })
      ]
};