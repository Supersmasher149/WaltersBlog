import type { NextPage } from "next";
import styles from "../styles/Posts.module.css";

interface postTypes {
  Title: string;
  Content: string;
}
type Props = {
  posts: postTypes[];
};


const Posts: NextPage<Props> = ({ posts }: Props) => { 
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

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
