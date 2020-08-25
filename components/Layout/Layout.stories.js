import React from "react";

import { Layout } from "./Layout";

export default {
  title: "Layout/Layout",
  component: Layout,
  argTypes: {
    children: { control: "text" },
    pageTitle: { control: "text" },
  },
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "children",
  pageTitle: "pageTitle",
};
