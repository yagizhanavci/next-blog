import { Node, NodeFrontMatter } from "next-mdx";
import Link from "next/link";

interface IPostCardProps {
  post: Node<NodeFrontMatter>;
}

export const PostCard: React.FC<IPostCardProps> = ({ post }) => {
  return (
    <Link href={post.url}>
      <a className="flex flex-col p-4 space-y-2 transition-colors border border-gray-800 rounded-lg hover:bg-opacity-30 hover:bg-indigo-500 postcard">
        <h2 className="text-2xl font-bold">{post.frontMatter.title}</h2>
        <p>{post.frontMatter.excerpt}</p>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {post.frontMatter.date}
        </span>
      </a>
    </Link>
  );
};
