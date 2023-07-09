import Feed from '@/components/Feed';
import NavBar from '@/components/NavBar';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <NavBar />

        <h1 className='head_text text-center'>
            Helper {">"} Prompt
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
            PHelper is an open-source AI prompting tool for every individual that wants to discover creative prompts.
        </p>
        <Feed />
    </section>
  )
}

export default Home;