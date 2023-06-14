const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 3031
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
    plugins:[
        new ModuleFederationPlugin({
            name: 'container',
            remotes:{
                formbuilder: 'formbuilder@http://localhost:3030/remoteEntry.js'
            }
        }),
        new HTMLWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
