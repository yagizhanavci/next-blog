import { mdxComponents, Page } from "@/components";
import { Post } from "@/models";
import { getMdxNode, getMdxPaths } from "next-mdx";
import { useHydrate } from "next-mdx/client";
import Head from "next/head";

interface IPostProps {
  post: Post;
}

const PostPage: React.FC<IPostProps> = ({ post }) => {
  const content = useHydrate(post, { components: mdxComponents });

  return (
    <Page>
      <Head>
        <title>{post.frontMatter.title} | Yağızhan Avcı</title>
      </Head>
      <article className="mt-4 prose">
        <h1>{post.frontMatter.title}</h1>
        <p>{post.frontMatter.excerpt}</p>
        <span>{post.frontMatter.date}</span>
        <hr className="my-4" />
        {content}
      </article>
    </Page>
  );
};

export default PostPage;

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const post = await getMdxNode<Post>("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
