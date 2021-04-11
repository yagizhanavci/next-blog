import { Node, NodeFrontMatter } from "next-mdx";
import Link from "next/link";

interface IPostCardProps {
  post: Node<NodeFrontMatter>;
}

export const PostCard: React.FC<IPostCardProps> = ({ post }) => {
  return (
    <Link href={post.url}>
      <a className="flex flex-col space-y-2 postcard">
        <h2 className="text-2xl font-bold">{post.frontMatter.title}</h2>
        <p>{post.frontMatter.excerpt}</p>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {post.frontMatter.date}
        </span>
      </a>
    </Link>
  );
};
