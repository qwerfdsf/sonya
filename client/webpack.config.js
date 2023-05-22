require('dotenv').config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { VuetifyLoaderPlugin } = require('vuetify-loader');

const sass = require('sass');

const isProduction = process.env.NODE_ENV === 'production';

const additionalConfig = {};
if (!isProduction) {
  additionalConfig.exclude = '/node_modules/';
}
const config = {
  entry: './src/main.js',
  output: {
    publicPath: '/',
    clean: true,
  },
  stats: {
    warnings: false,
  },
  devServer: {
    client: {
      overlay: false,
    },
    compress: true,
    open: true,
    host: 'localhost',
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  cache: true,
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
      baseUrl: '/',
    }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin({
      // eslint-disable-next-line consistent-return
      match(originalTag, { kebabTag, camelTag }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`];
        }
      },
    }),
  ],
  resolve: {
    symlinks: false,
    extensions: ['*', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        ...additionalConfig,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        ...additionalConfig,
        use: [
          'style-loader',
          {
            loader: 'css-loader?url=false',
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        ...additionalConfig,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sassOptions: {
                indentedSyntax: true,
              },
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'file-loader',
        ...additionalConfig,
        options: {
          name: './assets/images/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          name: './assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: isProduction,
          loaders: {
            sass: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax',
            ],
          },
        },
      },
    ],
  },
};

module.exports = () => {
  config.mode = 'development';
  config.devtool = 'eval-cheap-source-map';
  return config;
};
