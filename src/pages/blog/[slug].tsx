import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { format, parseISO } from "date-fns";
import { getPostSlugs } from "util/getPostSlugs";
import { GetStaticProps } from "next";

export default function BlogPost({ title, date, content }: {title:string, date:string, content:any}) {
  return (
    <main className="mx-4 md:mx-24">
      <div className="p-10 text-center md:p-24">
        <h2 className="text-5xl font-bold my-5  md:text-7xl">
          {title}
        </h2>
        <h3 className="text-gray-800">
          {format(parseISO(date), "MMMM do, uuu")}
        </h3>
      </div>
      <article className="prose prose-xl">
        <MDXRemote {...content} />
      </article>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = getPostSlugs();
  const content = allPosts.find((blog) => blog.slug === params!!.slug);
  const mdxSource = await serialize(content!!.content);
  return {
    props: {
      date: content!!.data.date.toISOString(),
      title: content!!.data.title,
      content: mdxSource,
    },
  };
};

export async function getStaticPaths() {
  const allPosts = getPostSlugs();
  return {
    paths: allPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
