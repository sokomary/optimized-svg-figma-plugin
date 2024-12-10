const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
    mode: argv.mode === 'production' ? 'production' : 'development',
    devtool: argv.mode === 'production' ? false : 'inline-source-map',
    entry: {
        code: './src/code.ts',
        ui: './src/ui.tsx',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|tsx?)$/,
                use: [{
                    loader: 'ts-loader',
                    options: { transpileOnly: true }
                }]
            },
            {
                test: /\.vanilla\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: require.resolve('css-loader') }
                ]
            }
        ]
    },
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    // Tells Webpack to generate "ui.html" and to inline "ui.ts" into it
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/ui.html',
            filename: 'ui.html',
            inlineSource: '.(js|css)$',
            chunks: ['ui'],
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new VanillaExtractPlugin(),
        new MiniCssExtractPlugin()
    ]
})