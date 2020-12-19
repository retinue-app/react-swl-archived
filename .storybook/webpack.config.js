module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          require.resolve('resolve-url-loader'),
          {
            loader: 'sass-loader',
            options: {
              importer: require('node-sass-magic-importer')(),
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff',
          },
        },
      },
      {
        test: /\.(ttf|eot|svg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]',
          },
        },
      },
    ],
  },
};
