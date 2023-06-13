import { Post } from "components/Blog";
import { Navbar } from "components/Navbar";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { getPostSlugs } from "util/getPostSlugs";

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <>
      <h1 className="text-4xl font-bold">Blog</h1>

      {posts.map((post) => (
        <Link href={`/blog/${post.slug}`}>
          <div key={post.slug} className="my-4">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.date}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = getPostSlugs();
  allPosts.sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date));
  return {
    props: {
      posts: allPosts.map((item) => ({
        date: item.data.date.toISOString(),
        title: item.data.title,
        description: item.data.description,
        content: item.content,
        slug: item.slug,
        type: item.data.type,
      })),
    },
  };
};
