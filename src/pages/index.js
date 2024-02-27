
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Project from '../components/Projects';
import Contact from '../components/Contact';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"


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
                <Analytics />
                <SpeedInsights />
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