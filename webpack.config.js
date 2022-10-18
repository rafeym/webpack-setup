const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // Entry point
    entry: './src/index.js',

    // Provide webpack name and location of bundle file
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]',
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
}
