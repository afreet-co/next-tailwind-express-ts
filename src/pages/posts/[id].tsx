import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: FC<PostProps> = ({ body, id, title, userId }) => {
  return (
    <div className="md:px-64 px-10 flex flex-col space-y-4">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <p className="text-lg font-medium ">{body}</p>
      <span className="">User Id : {userId}</span>
      <span className="">Id : {id}</span>
    </div>
  );
};
export default Post;
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map(({ id }) => ({ params: { id: `${id}` } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      ...post,
    },
  };
};
