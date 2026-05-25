import { Fragment, useState, useEffect } from 'react';

import { BodySecondary } from '@/atomic/atm.typography/typography';
import { formatDate } from '@/app/utils/format-date';
import { PostLink } from '@/atomic/obj.post/post.style';
import { Separator } from '@/atomic/atm.separator/separator.style';
import type { Post } from '@/atomic/obj.post/post.types';

export default function BlogIndex() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts/`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Error loading posts:', err));
  }, []);

  const orderedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).getTime() -
      new Date(a.frontmatter.pubDate).getTime(),
  );

  return orderedPosts.map((post) => (
    <Fragment key={post.slug}>
      <BodySecondary>{formatDate(post.frontmatter.pubDate)}</BodySecondary>
      <PostLink to={`/blog/${post.slug}`}>{post.frontmatter.title}</PostLink>
      <Separator type={'subsection'} />
    </Fragment>
  ));
}
