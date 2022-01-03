// const path = require("path");
module.exports = {
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },

      use: ['@svgr/webpack'],
    })

    return config
  },
}
