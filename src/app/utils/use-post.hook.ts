import { useState, useEffect } from 'react';
import type { Post } from '@/atomic/obj.post/post.types';

export function useBlogPost(slug: string | undefined) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(null);

    fetch(`${import.meta.env.VITE_API_URL}/posts/${slug}.md`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.error('Error loading markdown post:', err);
        setError(err);
        setPost(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  return { post, loading, error };
}
