import type { NextPage } from "next";

export interface postTypes {
  Title: string;
  Content: string;
}
type Props = {
  posts: postTypes[];
};


const Posts: NextPage<Props> = ({ posts }: Props) => { 
  return (
    <div className={"flex flex-col items-center m-5 p-2"}>
      <h1 className={"text-3xl font-semibold my-8"}>Posts</h1>
      <div className={"flex flex-col"}>
        {posts.map((post: postTypes) => (
          <div className={"py-5 border-t items-center"} key={post.Title}>
            <h2 className={"text-xl font-semibold"}>{post.Title}</h2>
            <p>{post.Content}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Posts;

export const getServerSideProps = async () => {
  const url = `${process.env.NEXTAUTH_URL}/api/posts/`
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
