import Link from 'next/link';
import Form from './Form';

const CreatePrompt = ({ href, session, submitting, setSubmitting, post, setPost }) => {
    
    const PromptCreation = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })
            response.ok && <Link href={href} />
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

  return (
    <Form 
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={PromptCreation}
    />
  )
}

export default CreatePrompt;