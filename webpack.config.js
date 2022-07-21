const path = require('path');
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
      plugins: [new MiniCssExtractPlugin()],
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