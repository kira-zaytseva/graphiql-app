import Head from 'next/head';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { useRouter } from 'next/router';
import { useTranslation } from '../hooks/useTranslation';

import '../assets/styles/normalize.css';
import '../assets/styles/global.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  const translation = useTranslation();

  const goToWelcome = translation.lang === 'EN' ? '/' : '/ru';
  const goToMain = translation.lang === 'EN' ? '/main' : '/ru/main';

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        console.log(`_APP: email = ${email}`);
        // TODO: set 'Sign Out' button onto the Header
        if (router.pathname === '/login') {
          console.log(`_APP: redirect to MAIN PAGE`);
          router.push(goToMain);
        }
      } else {
        console.log(`_APP: user is logged out`);
        // TODO: set 'Sign In' and 'Sing Up' buttons onto the Header
        if (router.pathname === '/main') {
          console.log(`_APP: redirect to WELCOME PAGE`);
          router.push(goToWelcome);
        }
      }
    });
  }, [goToMain, goToWelcome, router, translation]);

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
