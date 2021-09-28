const WindiCSS = require('windicss-webpack-plugin').default

module.exports = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.plugins.push(new WindiCSS())
    return config
  },
  babel: async options => ({
    ...options,
    presets: ['solid'],
  }),
}
