import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { Article, Prose } from '@/atomic/obj.post/post.style';
import { BodySecondary, H1 } from '@/atomic/atm.typography/typography';
import { Separator } from '@/atomic/atm.separator/separator.style';
import { formatDate } from '@/app/utils/format-date';
import { useBlogPost } from '@/app/utils/use-post.hook';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { post, loading, error } = useBlogPost(slug);

  if (loading) return <Article>Loading post...</Article>;
  if (error || !post) return <Article>Ops... Nothing to read here.</Article>;

  return (
    <Article>
      <H1>{post?.frontmatter.title}</H1>
      <Separator type={'line'} />
      <BodySecondary>
        {formatDate(post.frontmatter.pubDate)} • Leo Palamim
      </BodySecondary>
      <Separator type={'subsection'} />
      <Prose>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {post?.content}
        </ReactMarkdown>
      </Prose>
      <Separator type={'subsection'} />
    </Article>
  );
};

export default BlogPost;
