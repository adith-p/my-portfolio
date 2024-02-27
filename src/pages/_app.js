// import '@/styles/globals.css';
import '../styles/globals.css';

// import Layout from '../components/layout';
import Layouts from '../components/layout';


export default function App({ Component, pageProps }) {
    return (
        <Layouts>
            <Component {...pageProps} />
        </Layouts>
    );
}