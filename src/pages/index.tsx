import { GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import { Navbar } from "components/Navbar";
import Hero from "components/Hero";
import Stats from "components/Stats";
import HowItWorks from "components/HowItWorks";
import Footer from "components/Footer";
import Blog, { Post } from "components/Blog";
import { getPostSlugs } from "util/getPostSlugs";

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Leginar</title>
        <meta name="description" content="Leginar Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Stats />
      <HowItWorks />
      <Blog posts={posts} />
      <Footer />
    </>
  );
};

export default Home;

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
