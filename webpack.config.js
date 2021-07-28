const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const isDev = process.env.npm_lifecycle_event === 'start';

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'inline-source-map' : false,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../', // path to director where assets folder is located
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        // Then we apply postCSS fixes like autoprefixer and minifying
                        loader: 'postcss-loader',
                    },
                    {
                        // First we transform SASS to standard CSS
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },

            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        // Using file-loader for these files
                        loader: 'file-loader',

                        // In options we can set different things like format
                        // and directory to save
                        options: {
                            outputPath: './assets/img',
                            name: '[name].[ext]',
                        },
                    }
                ],
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets'),
                }
            ],
        }),
    ],
}
