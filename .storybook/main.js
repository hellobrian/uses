module.exports = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
          localIdentName: "[name]__[local]--[hash:base64:5]",
        },
      },
    },
  ],
};
