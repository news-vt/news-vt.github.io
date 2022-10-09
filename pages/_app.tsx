import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
            <title>NEWS@VT</title>
            <meta name="description" content="NEWS@VT website" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/newsvticon.png" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
        </Head>

        <Component {...pageProps} />

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"/>
    </>
    );
}

export default MyApp
