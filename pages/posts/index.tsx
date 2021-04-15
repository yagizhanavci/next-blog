import { Page, PostCard, Searchbar } from "@/components";
import { Post } from "@/models";
import { GetStaticPropsContext } from "next";
import { getAllNodes } from "next-mdx/server";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";

interface IPostsProps {
  posts: Post[];
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  const { locale } = useRouter();
  const { t } = useTranslation();
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>(posts);
  const [searchText, setSearchText] = React.useState<string>("");

  const onSearchChange = (v: string) => {
    setSearchText(v);
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

  React.useEffect(() => {
    setFilteredPosts(posts);
    setSearchText("");
  }, [locale]);

  return (
    <Page title="Posts - Yağızhan Avcı">
      <h1 className="mb-4 text-2xl font-bold tracking-tight text-black my-7 md:text-3xl dark:text-white">
        {t("posts:allPosts", { count: filteredPosts.length })}
      </h1>
      <Searchbar
        onChange={onSearchChange}
        placeholder={t("posts:placeholder")}
        value={searchText}
      />
      <div className="mt-8 space-y-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} locale={locale} />
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      posts: await getAllNodes<Post>(locale),
    },
  };
}

export default Posts;
