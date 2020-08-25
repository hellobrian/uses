import React from "react";

import { Post, PostList } from "./PostList";

export default {
  title: "Components/PostList",
  argTypes: {
    href: { control: "text" },
    name: { control: "text" },
    children: { control: "text" },
  },
};

const PostTemplate = (args) => <Post {...args} />;
export const PostStory = PostTemplate.bind({});
PostStory.args = {
  href: "https://brianhan.co",
  name: "Product Name",
  children: "This is an overview from frontmatter",
};

const PostListTemplate = (args) => <PostList {...args} />;
export const PostListStory = PostListTemplate.bind({});
PostListStory.args = {
  posts: [
    {
      slug: "slug",
      frontmatter: {
        name: "Product Name",
        overview: "This is an overview from frontmatter",
      },
    },
    {
      slug: "slug",
      frontmatter: {
        name: "Product Name",
        overview: "This is an overview from frontmatter",
      },
    },
    {
      slug: "slug",
      frontmatter: {
        name: "Product Name",
        overview: "This is an overview from frontmatter",
      },
    },
  ],
};
