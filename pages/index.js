/**
 * We imported matter to parse the front matter
 */
import matter from "gray-matter";

import { Layout, PostList } from "@components";

import styles from "./index.module.scss";

const Index = ({ posts, title, description }) => {
  return (
    <Layout pageTitle={title}>
      <div className={styles.homePage}>
        {/* <h1>{description}</h1> */}
        <main>
          <PostList posts={posts}></PostList>
        </main>
      </div>
    </Layout>
  );
};

export default Index;

/**
 * getStaticProps lets you fetch data, and return it as props to the page component.
 * You can use getStaticProps to fetch local data
 * (as you can see here, fetching from the siteconfig.json file),
 * or external APIs and libraries.
 * This function will only work on page components in the pages directory!
 * The page will be rendered at build time, and you can pass that data to its child components.
 */
export async function getStaticProps() {
  const configData = await import(`@/siteconfig.json`);

  /**
   * We added a posts variable in here that pulls in the Markdown files,
   * parses them, and then passes that posts variable into the props for Index.
   */
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
