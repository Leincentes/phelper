'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import EditPrompt from '@/components/EditPrompt'
import { useSession } from 'next-auth/react';

const update_prompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
      prompt: '',
      tag: '',
  });

  {!session && router.push('/')}

  return (
    <EditPrompt 
      session={session}
      router={router}
      promptId={promptId}
      post={post}
      setSubmitting={setSubmitting}
      submitting={submitting}
      setPost={setPost}
    />
  )
}

export default update_prompt;