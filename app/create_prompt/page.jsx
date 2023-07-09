'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import CreatePrompt from '@/components/CreatePrompt';
import Link from 'next/link';

const create_prompt = () => {
  const {data: session} = useSession();
  
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  
  {!session && <Link href={'/'} />}
  
  return (
    <>
      <CreatePrompt 
        href={'/'}
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