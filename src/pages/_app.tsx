import Head from 'next/head';
import { AppProps } from 'next/app';
import './style.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
