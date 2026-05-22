import type { PostFrontmatter, Post } from '@/atomic/obj.post/blog-post.types';
import matter from 'gray-matter';

interface RawMarkdownModule {
  default: string;
}

const rawModules = import.meta.glob<RawMarkdownModule>(
  '/src/content/blog/*.md',
  {
    query: '?raw',
    eager: true,
  },
);

export function getPosts(): Post[] {
  const posts = Object.entries(rawModules).map(([filePath, module]) => {
    const rawContent = module.default;
    const { data, content } = matter(rawContent);
    const frontmatterData = data as PostFrontmatter;
    const slug = filePath.split('/').pop()?.replace('.md', '') || '';
    return {
      slug,
      frontmatter: frontmatterData,
      content,
    };
  });

  return posts;
}
