module.exports = {
  plugins: [
    require('precss')(),
    require('postcss-url')({ url: 'inline' }),
  ],
}
