import Link from "next/link";
import styles from "./PostList.module.css";

export function Post({ href, name, children }) {
  return (
    <Link href={href}>
      <a className={styles.post}>
        <span className={styles.post__name}>{name}</span>
        <div className={styles.post__overview}>{children}</div>
      </a>
    </Link>
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
                <Post
                  name={post.frontmatter.name}
                  href={{ pathname: `/post/${post.slug}` }}
                >
                  {post.frontmatter.overview}
                </Post>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
