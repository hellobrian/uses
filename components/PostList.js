import Link from "next/link";
import styles from "./PostList.module.css";

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
                  <a className={styles.thing}>
                    <span className={styles.thing__name}>
                      {post.frontmatter.name}
                    </span>
                    <div className={styles.overview}>
                      {post.frontmatter.overview}
                    </div>
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
