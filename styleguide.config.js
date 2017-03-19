const path = require('path');

module.exports = {
    title: "React Atlas Styleguide",
    components: "src/**/!(*.test|index).js",
    assetsDir: "docsAssets",
    require: [
        path.join(__dirname, 'docsAssets/font-awesome.min.css'),
    ],
    webpackConfig: {
        module: {
            loaders: [
                // Babel loader, will use your project’s .babelrc
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                // Other loaders that are needed for your components
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000' }
            ]
        }
    }
};