import Head from 'next/head';
import { AppProps } from 'next/app';

import '../assets/styles/normalize.css';
import '../assets/styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo_graphiql.png" sizes="any" />
        <title>GraphiQL</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
