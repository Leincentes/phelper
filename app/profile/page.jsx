'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import MyProfile from '@/components/MyProfile'
import Link from 'next/link';

const profile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  {!session && <Link href='/' />}

  return (
    <MyProfile
      session={session}
      setPosts={setPosts}
      setMyPosts={setMyPosts}
      posts={posts}
    />
  )
}

export default profile;