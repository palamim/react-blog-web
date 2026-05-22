import { Fragment } from 'react';
import { getPosts } from '@/app/utils/get-posts';
import { Link } from 'react-router-dom';
import { BodySecondary, H3 } from '@/atomic/atm.typography/typography';
import { formatDate } from '@/app/utils/format-date';
import { NavLink } from '@/atomic/org.header/header.component.style';
import { PostLink } from '@/atomic/obj.post/post.style';
import { Separator } from '@/atomic/atm.separator/separator.style';

export default function BlogIndex() {
  const posts = getPosts();
  const orderedPosts = posts.sort(
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
