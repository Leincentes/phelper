'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import CreatePrompt from '@/components/CreatePrompt';

const create_prompt = () => {
  
  const router = useRouter();
  const {data: session} = useSession();
  
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  
  {!session && router.push('/')}
  
  return (
    <>
      <CreatePrompt 
        router={router}
        session={session}
        submitting={submitting}
        setSubmitting={setSubmitting}
        post={post}
        setPost={setPost}
      />
    </>
  )
}

export default create_prompt;