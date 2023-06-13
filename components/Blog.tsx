import Link from "next/link";
import React from "react";

export interface Post {
  date: string;
  title: string;
  description: string;
  content: string;
  slug: string;
  type: string;
}

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <div>
      <div className="flex h-64 w-64 flex-col border-2 border-black p-4">
        <p className="mb-6 w-fit rounded-md bg-black px-2 text-white">
          {post.type}
        </p>
        <p>{post.title}</p>
        <p className="flex-grow"></p>
        <p className="underline">
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </p>
      </div>
    </div>
  );
};

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div className="flex w-10/12 flex-col ">
      <h2 className="mb-8 text-4xl font-medium">Blog</h2>

      <div className="flex flex-row space-x-5 overflow-x-scroll">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
    </div>
  );
}
