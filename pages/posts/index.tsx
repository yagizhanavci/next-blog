import { Page, PostCard, Searchbar } from "@/components";
import { getAllNodes, Node, NodeFrontMatter } from "next-mdx/server";
import useTranslation from "next-translate/useTranslation";
import React from "react";

interface IPostsProps {
  posts: Node<NodeFrontMatter>[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const { t } = useTranslation();
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
    <Page title="Posts - Yağızhan Avcı">
      <h1 className="mb-4 text-2xl font-bold tracking-tight text-black my-7 md:text-3xl dark:text-white">
        {t("posts:allPosts", { count: filteredPosts.length })}
      </h1>
      <Searchbar
        onChange={onSearchChange}
        placeholder={t("posts:placeholder")}
      />
      <div className="mt-8 space-y-4">
        {filteredPosts.map((post) => (
          <PostCard post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {t("posts:noPosts")}
          </p>
        )}
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
