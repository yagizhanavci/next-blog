import { Page, PostCard, Searchbar } from "@/components";
import { getAllNodes, Node, NodeFrontMatter } from "next-mdx/server";
import Head from "next/head";
import React from "react";

interface IPostsProps {
  posts: Node<NodeFrontMatter>[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = React.useState<typeof posts[0][]>(
    posts,
  );

  const onSearchChange = (v: string) => {
    if (v.length === 0) setFilteredPosts(posts);
    else {
      let newFilteredPosts = [...posts];
      newFilteredPosts = newFilteredPosts.filter((post) =>
        (post.frontMatter.title as string)
          .toLowerCase()
          .includes(v.toLowerCase()),
      );
      setFilteredPosts(newFilteredPosts);
    }
  };

  return (
    <Page>
      <Head>
        <title>Posts | Yağızhan Avcı</title>
      </Head>
      <h1 className="mb-4 text-2xl font-bold tracking-tight text-black my-7 md:text-3xl dark:text-white">
        All Posts ({filteredPosts.length})
      </h1>
      <Searchbar onChange={onSearchChange} placeholder="Search posts" />
      <div className="mt-8 space-y-4">
        {filteredPosts.map((post) => (
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
