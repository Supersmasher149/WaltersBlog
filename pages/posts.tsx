import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "../styles/Posts.module.css";

type postTypes = {
  Title: string;
  Content: string;
}

const Posts: NextPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }
  , []);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Posts</h1>
      <div className={styles.posts}>
        {posts.map((post: postTypes) => (
          <div className={styles.post} key={post.Title}>
            <h2 className={styles.postTitle}>{post.Title}</h2>
            <p className={styles.postContent}>{post.Content}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Posts;
