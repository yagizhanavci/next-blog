import { MdxNode } from "next-mdx";

export interface Post
  extends MdxNode<{
    title: string;
    excerpt?: string;
    image?: string;
    author?: string[];
    category?: string;
    date?: string;
    featured?: boolean;
  }> {}
