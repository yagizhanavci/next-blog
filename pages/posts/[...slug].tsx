import { ArrowLeft, IconButton, mdxComponents, Page } from "@/components";
import { Post } from "@/models";
import { format, parseISO } from "date-fns";
import { enUS, tr } from "date-fns/locale";
import fs from "fs";
import { GetStaticPathsContext } from "next";
import { getMdxNode } from "next-mdx";
import { useHydrate } from "next-mdx/client";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";
import path from "path";
import readingTime from "reading-time";

interface IPostProps {
  post: Post;
}

const PostPage: React.FC<IPostProps> = ({ post }) => {
  const { t } = useTranslation();
  const content = useHydrate(post, { components: mdxComponents });
  const { locale } = useRouter();
  const stats = readingTime(post.content);
  stats.minutes = Math.ceil(stats.minutes);

  return (
    <Page
      title={`${post.frontMatter.title} - Yağızhan Avcı`}
      description={post.frontMatter.excerpt}
      image={`https://yagizhanavci.com.tr${post.frontMatter.image}`}
      date={new Date(post.frontMatter.date).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mt-8 mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.frontMatter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 mb-4 space-x-0 space-y-2 sm:space-x-2 sm:items-center sm:flex-row sm:space-y-0">
          <div className="flex items-center">
            <Image
              alt="Yağızhan Avcı"
              height={24}
              width={24}
              src="/static/images/avatar.jpeg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="font-semibold">
                Yağızhan Avcı
                {" /  "}
                {format(parseISO(post.frontMatter.date), "MMMM dd, yyyy", {
                  locale: locale === "en" ? enUS : tr,
                })}
              </span>
            </p>
          </div>
          <span className="text-sm text-gray-500">
            {t("post:readingTime", {
              s: stats.minutes > 1 ? "s" : "",
              minutes: stats.minutes,
            })}
          </span>
        </div>
        <div className="w-full prose dark:prose-dark max-w-none">{content}</div>
      </article>
      <div className="flex justify-start py-4 -mx-4 bg-white dark:bg-black">
        <IconButton
          text={t("post:allPosts")}
          icon={<ArrowLeft className="w-6 h-6 text-indigo-500" />}
          href="/posts"
        />
      </div>
    </Page>
  );
};

export default PostPage;

export async function getStaticPaths({ locales }: GetStaticPathsContext) {
  const paths: Array<{ params: { slug: string[] }; locale: string }> = [];
  locales.forEach((locale) => {
    const postsDirectory = path.join(
      process.cwd(),
      `./content/posts/${locale}`,
    );
    let postSlugs = fs.readdirSync(postsDirectory);
    postSlugs = postSlugs.map((slug) => slug.split(".mdx")[0]);
    const postPaths = postSlugs.map((slug) => ({
      params: { slug: [slug] },
      locale,
    }));
    paths.push(...postPaths);
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const post = await getMdxNode<Post>(context.locale, context);

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
