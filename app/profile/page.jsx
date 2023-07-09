'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import MyProfile from '@/components/MyProfile'

const profile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const router = useRouter();

  {!session && router.push('/')}

  return (
    <MyProfile
      session={session}
      setPosts={setPosts}
      router={router}
      setMyPosts={setMyPosts}
      posts={posts}
    />
  )
}

export default profile;