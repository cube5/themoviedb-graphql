const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const BundleAnalyzer = require("webpack-bundle-analyzer");

const packageJson = require("./package.json");
const vendorDependencies = Object.keys(packageJson["dependencies"]);

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.ts",
    vendor: vendorDependencies
  },
  externals: [nodeExternals()],
  devtool: "sourcemap",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
    // publicPath: "/"
  },
  plugins: [
    new BundleAnalyzer.BundleAnalyzerPlugin(),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader!ts-loader"
        // use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
        // use: [{ loader: "babel-loader" }]
      }
    ]
  }
};
