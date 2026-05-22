export interface PostFrontmatter {
  title: string;
  description: string;
  pubDate: Date;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}
