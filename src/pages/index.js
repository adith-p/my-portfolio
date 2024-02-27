
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Projects';
import Contact from '../components/Contact';



const Home = () => {
    return (
        <>
            <Head>
                <title>Adith's Portfolio</title>
                <meta name="description" content="Adith's Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.jpeg" />
            </Head>
            <div>
                <Hero />
                <About />
                <Skills />
                <Project />
                <Contact />

            </div>
        </>
    );
};

export default Home;