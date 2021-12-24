const withPlugins = require('next-compose-plugins')
const { i18n } = require('./next-i18next.config')
const withImages = require('next-images')

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  i18n,
}

module.exports = withPlugins([[withImages]], nextConfig)
