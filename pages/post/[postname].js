import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "@components/Layout";

import styles from "./postname.module.css";

export default function BlogPost({
  siteTitle,
  frontmatter,
  markdownBody,
  hero,
}) {
  if (!frontmatter) return <></>;

  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.name}`}>
        <article className={styles.blog}>
          <img
            className={styles.blog__hero}
            src={frontmatter.hero}
            alt={`${frontmatter.name} - ${frontmatter.overview}`}
          />
          <h1>{frontmatter.name}</h1>
          <h2>{frontmatter.overview}</h2>
          <div>
            <div className={styles.blog__content}>
              <ReactMarkdown source={markdownBody} />
            </div>
          </div>
          <div>
            tags:{" "}
            {frontmatter.tags.map((tag, index) => (
              <span key={`tag-${index}`}>{`${tag} `}</span>
            ))}
          </div>
        </article>
      </Layout>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`@/posts/${postname}.md`);
  const config = await import(`@/siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

/**
 * getStaticPaths defines a list of paths that have to be rendered to HTML at build time.
 * What we do here is take in all of our Markdown files in the posts directory,
 * parse out the file names, define a list of slugs based on each file name,
 * and return them.
 *
 * We also return a fallback which is false,
 * so that 404 pages appear if something’s not matching properly.
 */
export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("@/posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
