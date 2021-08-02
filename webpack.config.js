
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// module.exports = {
//   mode: "development",
//   devtool: "inline-source-map",
//   entry: "./app.ts",
//   output: {
//     filename: "bundle.js"
//   },
//   resolve: {
//     // Add `.ts` and `.tsx` as a resolvable extension.
//     extensions: [".ts", ".tsx", ".js"]
//   },
//   module: {
//     rules: [
//       // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
//       { test: /\.tsx?$/, loader: "ts-loader" }
//     ]
//   },
//   devServer: {
//     publicPath: "/",
//     contentBase: "./public",
//     hot: true
// },
// };

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // var config = {
  //     entry: { 'bundle': './App.js' },
  //   devtool: "inline-source-map",
  //   output: {
  //     filename: "bundle.js"
  //   },
  //   resolve: {
  //     // Add `.ts` and `.tsx` as a resolvable extension.
  //     extensions: [".ts", ".tsx", ".js"]
  //   },
  //   module: {
  //     rules: [
  //       // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
  //       { test: /\.tsx?$/, loader: "ts-loader" }
  //     ]
  //   },
  //   devServer: {
  //     publicPath: "/",
  //     contentBase: "./public",
  //     hot: true
  // },
  // }
 
  // Or prevent minimizing the bundle when you build.
  if (config.mode === 'production') {
    config.optimization.minimize = false;
  }
    return config;
};