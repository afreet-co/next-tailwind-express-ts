import { GetStaticProps } from "next";
import NextLink from "next/link";
import { FC } from "react";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  posts: PostProps[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div className="md:px-64 px-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 flex flex-col justify-between shadow-lg rounded-lg bg-gradient-to-r from-indigo-300 to-purple-400"
        >
          <NextLink href={`/posts/${post.id}`}>
            <a className="hover:text-gray-600 font-semibold transition-all duration-150">
              {post.title}
            </a>
          </NextLink>
          <p className="text-sm font-medium">User Id:{post.userId}</p>
        </div>
      ))}
    </div>
  );
};
export default Posts;

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
