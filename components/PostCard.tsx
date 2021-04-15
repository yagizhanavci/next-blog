import { Post } from "@/models";
import { format, parseISO } from "date-fns";
import { enUS, tr } from "date-fns/locale";
import Link from "next/link";

interface IPostCardProps {
  post: Post;
  locale: string;
}

export const PostCard: React.FC<IPostCardProps> = ({ post, locale }) => {
  return (
    <Link href={post.url} locale={locale}>
      <a className="flex flex-col space-y-2 postcard">
        <h2 className="text-2xl font-bold">{post.frontMatter.title}</h2>
        <p>{post.frontMatter.excerpt}</p>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {format(parseISO(post.frontMatter.date as string), "MMMM dd, yyyy", {
            locale: locale === "en" ? enUS : tr,
          })}
        </span>
      </a>
    </Link>
  );
};
