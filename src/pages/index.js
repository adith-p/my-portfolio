
import Head from 'next/head';
import Hero from '../components/Hero';

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
            </div>
        </>
    );
};

export default Home;