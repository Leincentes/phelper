import { useEffect } from 'react';
import Profile from './Profile';
import Link from 'next/link';

const MyProfile = ({ session, setPosts, setMyPosts, posts }) => {
    
    useEffect(() => {
      const fetchPosts = async () => { 
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();

          setPosts(data);
      }

      if(session?.user.id) fetchPosts();
    }, []);

    const handleEdit = (post) => {
        <Link href={`/update_prompt?id=${post._id}`}/>
    }
    const handleDelete = async (post) => {
        const hasConfirmed = confirm(
          "Are you sure you want to delete this prompt?"
        );
    
        if (hasConfirmed) {
          try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
              method: "DELETE",
            });
    
            const filteredPosts = myPosts.filter((item) => item._id !== post._id);
    
            setMyPosts(filteredPosts);
          } catch (error) {
            console.log(error);
          }
        }
      };

  return (
    <Profile
        name='My'
        desc='Welcome to profile page'
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile;