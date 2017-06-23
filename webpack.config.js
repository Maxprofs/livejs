var path = require('path');

module.exports = {
    entry: './public/src/app.js',
    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './public/src')
                ],
                exclude: [
                    path.resolve(__dirname, './node_modules')
                ],
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, './node_modules')
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    }
};
