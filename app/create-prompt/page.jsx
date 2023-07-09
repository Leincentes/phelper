'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import CreatePrompt from '@components/CreatePrompt';

const page = () => {
    const router = useRouter();
    const {data: session} = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

  return (
    <CreatePrompt 
      router={router}
      session={session}
      setSubmitting={setSubmitting}
      post={post}
    />
  )
}

export default page;