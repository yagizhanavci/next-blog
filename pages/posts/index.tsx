import { Page } from "@/components";
import { getAllNodes, Node, NodeFrontMatter } from "next-mdx/server";
import Head from "next/head";
import Link from "next/link";

interface IPostsProps {
  posts: Node<NodeFrontMatter>[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  return (
    <Page>
      <Head>
        <title>Posts | Yağızhan Avcı</title>
      </Head>
      <div className="mt-4 space-y-4">
        {posts.map((post) => (
          <article key={post.url}>
            <h2 className="text-2xl font-bold">
              <Link href={post.url}>
                <a>{post.frontMatter.title}</a>
              </Link>
            </h2>
            <p>{post.frontMatter.excerpt}</p>
            <span className="text-gray-500">{post.frontMatter.date}</span>
          </article>
        ))}
      </div>
    </Page>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}

export default Posts;
