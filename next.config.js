const { i18n } = require('./next-i18next.config')

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
})

module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  i18n,
  images: {
    optimize: false,
    domains: ['s3-alpha-sig.figma.com'],
  },
}
