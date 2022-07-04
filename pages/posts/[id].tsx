import type { postTypes } from "./index";
import type { NextPage } from "next";

const Post: NextPage<postTypes> = ({ post }) => {
  return (
    <div className={"flex flex-col items-center m-5 p-2"}>
      <h1 className={"text-3xl font-semibold my-8"}>{post.Title}</h1>
      <div className={"flex flex-col"}>
        <p>{post.Content}</p>
      </div>
    </div>
  );
};

export default Post;

export const getServerSideProps = async ({ query }) => {
  const url = `${process.env.NEXTAUTH_URL}/api/posts/${query.id}`
  const res = await fetch(
    url,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};
