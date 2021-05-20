const path = require( 'path' );

module.exports = {

  // bundling mode
  mode: 'development',

  // entry files
  entry: './src/index.ts',

  // output bundles (location)
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'main.js',
  },

  // file resolutions
  resolve: {
    extensions: [ '.ts', '.js', '.css' ],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};
