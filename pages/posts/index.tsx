import { Page, PostCard } from "@/components";
import { getAllNodes, Node, NodeFrontMatter } from "next-mdx/server";
import Head from "next/head";

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
          <PostCard post={post} />
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
