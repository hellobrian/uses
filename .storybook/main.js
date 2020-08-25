const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx|md|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
