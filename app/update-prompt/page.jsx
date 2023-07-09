'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import EditPrompt from '@components/EditPrompt'

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
      prompt: '',
      tag: '',
  });

  return (
    <EditPrompt 
      router={router}
      promptId={promptId}
      post={post}
      setSubmitting={setSubmitting}
      submitting={submitting}
      setPost={setPost}
    />
  )
}

export default page;