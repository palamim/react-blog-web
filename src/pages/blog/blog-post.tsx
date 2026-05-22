import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { getPosts } from '@/app/utils/get-posts';
import { Article, Prose } from '@/atomic/obj.post/post.style';
import { BodySecondary, H1 } from '@/atomic/atm.typography/typography';
import { Separator } from '@/atomic/atm.separator/separator.style';
import { formatDate } from '@/app/utils/format-date';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const posts = getPosts();
  const currentPost = posts.find((post) => post.slug === slug);

  if (!currentPost) {
    return <Article>Ops... Nothing to read here.</Article>;
  }

  return (
    <Article>
      <H1>{currentPost?.frontmatter.title}</H1>
      <Separator type={'line'} />
      <BodySecondary>
        {formatDate(currentPost.frontmatter.pubDate)} • Leo Palamim
      </BodySecondary>
      <Separator type={'subsection'} />
      <Prose>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {currentPost?.content}
        </ReactMarkdown>
      </Prose>
      <Separator type={'subsection'} />
    </Article>
  );
};

export default BlogPost;
