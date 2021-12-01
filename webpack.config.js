const path = require('path') // Utilizado para substituir o 'barra' / ou \ que é diferente nos SO - __dirname vai pegar o diretório do arquivo da instrução.
const HtmlWebpcakPlugin = require('html-webpack-plugin')

const isDevelepment = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: isDevelepment ? 'development' : 'production',
    devtool: isDevelepment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: path.join(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpcakPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    }
}