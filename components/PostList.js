import Link from "next/link";
import styles from "./PostList.module.css";

export function Post({ name, children }) {
  return (
    <a className={styles.post}>
      <span className={styles.post__name}>{name}</span>
      <div className={styles.post__overview}>{children}</div>
    </a>
  );
}

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div className={styles.postList}>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <Post name={post.frontmatter.name}>
                    {post.frontmatter.overview}
                  </Post>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
