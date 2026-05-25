import type React from 'react';
import { useEffect, useState } from 'react';

import { WriteWrapper } from '@/app/modules/write/write.style';
import { Body, H3 } from '@/atomic/atm.typography/typography';
import { Separator } from '@/atomic/atm.separator/separator.style';
import { Button, Form, Input, TextArea } from '@/atomic/obj.form/form.style';
import { useNavigate } from 'react-router-dom';

interface WritePost {
  title: string;
  description: string;
  content: string;
}

const emptyPost: WritePost = {
  title: '',
  description: '',
  content: '',
};

const Write: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [writtenPost, setWrittenPost] = useState<WritePost>(emptyPost);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(writtenPost),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      navigate(`/blog/${data.slug}`);
    } catch (err) {
      console.error('Error:', err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setWrittenPost({
      ...writtenPost,
      [event.target.name]: event.target.value,
    });
  };

  if (isLoading) return <WriteWrapper>Loading...</WriteWrapper>;

  return (
    <WriteWrapper>
      <Separator type={'section'} />
      <H3>Let's write a blog post</H3>
      <Form onSubmit={handleSubmit}>
        <Input
          name={'title'}
          value={writtenPost.title}
          placeholder={'Title'}
          onChange={handleChange}
          required
        />
        <Separator type={'line'} />
        <Input
          name={'description'}
          value={writtenPost.description}
          placeholder={'Description'}
          onChange={handleChange}
        />
        <Separator type={'line'} />
        <TextArea
          name={'content'}
          value={writtenPost.content}
          placeholder={'Content'}
          onChange={handleChange}
          required
        />
        <Separator type={'line'} />
        <Button type={'submit'}>Send!</Button>
        {isError && <Body>Failed to send post, friend. Try again.</Body>}
      </Form>
      <Separator type={'section'} />
    </WriteWrapper>
  );
};

export default Write;
