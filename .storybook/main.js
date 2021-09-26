const solidPlugin = require("vite-plugin-solid");
const WindiCSS = require("vite-plugin-windicss").default;

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
  async viteFinal(config, { configType }) {
    config.optimizeDeps.include.push('slash', 'lodash/startCase')
    config.plugins.push(solidPlugin(), WindiCSS());
    // return the customized config
    return config;
  },
};
