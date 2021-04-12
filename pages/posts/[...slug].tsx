import { ArrowLeft, IconButton, mdxComponents, Page } from "@/components";
import { Post } from "@/models";
import { format, parseISO } from "date-fns";
import { getMdxNode, getMdxPaths } from "next-mdx";
import { useHydrate } from "next-mdx/client";
import Image from "next/image";

interface IPostProps {
  post: Post;
}

const PostPage: React.FC<IPostProps> = ({ post }) => {
  const content = useHydrate(post, { components: mdxComponents });

  return (
    <Page
      title={`${post.frontMatter.title} - Yağızhan Avcı`}
      description={post.frontMatter.excerpt}
      image={`https://yagizhanavci.vercel.app${post.frontMatter.image}`}
      date={new Date(post.frontMatter.date).toISOString()}
      type="article"
    >
      <div className="flex justify-start sticky top-[56px] bg-white dark:bg-black py-2 z-50">
        <IconButton
          text="Posts"
          icon={<ArrowLeft className="w-6 h-6 text-indigo-500" />}
          href="/posts"
        />
      </div>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.frontMatter.title}
        </h1>
        <div className="flex items-center mt-2 mb-4 space-x-2">
          <Image
            alt="Yağızhan Avcı"
            height={24}
            width={24}
            src="/static/images/avatar.jpeg"
            className="rounded-full"
          />
          <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Yağızhan Avcı</span>
            {" / "}
            {format(parseISO(post.frontMatter.date), "MMMM dd, yyyy")}
          </p>
        </div>
        <div className="w-full prose dark:prose-dark max-w-none">{content}</div>
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
