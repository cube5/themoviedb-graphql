const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");
// const BundleAnalyzer = require("webpack-bundle-analyzer");

const packageJson = require("./package.json");
const vendorDependencies = Object.keys(packageJson["dependencies"]);

module.exports = {
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
  },
  plugins: [
    // new BundleAnalyzer.BundleAnalyzerPlugin(),
    new NodemonPlugin(),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    },
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [{ loader: "graphql-import-loader" }]
      }
    ]
  }
};
