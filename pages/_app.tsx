// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '../components/navbar';

// Navbar elements.
const NAVBAR_TITLE = "NEWS@VT";
const NAVBAR_MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Next.js Home", href: "/nextjshome" },
    { text: "Blog Demo", href: "/demo/blog" },
    { text: "Publications Demo", href: "/demo/publications" },
];

function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
            <title>{NAVBAR_TITLE}</title>
            <meta name="description" content="NEWS@VT website" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/newsvticon.png" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github.min.css"/>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"/> */}
        </Head>

        <Navbar title={NAVBAR_TITLE} menu_list={NAVBAR_MENU_LIST}/>

        <Component {...pageProps} />

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"/>
    </>
    );
}

export default MyApp
