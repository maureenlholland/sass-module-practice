const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'old-sass': path.resolve(__dirname, 'sass/old-page-specific.scss'),
        'new-sass': path.resolve(__dirname, 'sass/new-page-specific.scss')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
      },
    plugins: [
        new MiniCssExtractPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['.'] },
            files: ["**/*.html", "sass/**/*.scss"]
          })
    ],
    module: {
        rules: [
            {
            test: /\.scss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                },
            ]
            },
        ],
    },
  };