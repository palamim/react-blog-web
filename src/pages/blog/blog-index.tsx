import { Fragment } from 'react';
import { getPosts } from '@/app/utils/get-posts';
import { Link } from 'react-router-dom';
import { BodySecondary, H3 } from '@/atomic/atm.typography/typography';
import { formatDate } from '@/app/utils/format-date';
import { NavLink } from '@/atomic/org.header/header.component.style';
import { PostLink } from '@/atomic/obj.post/post.style';

export default function BlogIndex() {
  const posts = getPosts();
  return posts.map((post) => (
    <Fragment key={post.slug}>
      <BodySecondary>{formatDate(post.frontmatter.pubDate)}</BodySecondary>
      <PostLink to={`/blog/${post.slug}`}>{post.frontmatter.title}</PostLink>
    </Fragment>
  ));
}
