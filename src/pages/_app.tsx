import Head from 'next/head';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { useRouter } from 'next/router';
import { useTranslation } from '../hooks/useTranslation';
import Context from '../context/context';

import '../assets/styles/normalize.css';
import '../assets/styles/global.scss';
import { UserVerified, defaultContext } from '../context/context';
import { GqlProvider } from '../context/gqlContext';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  const translation = useTranslation();
  const [user, setUser] = useState<UserVerified>(defaultContext);

  const goToWelcome = translation.lang === 'EN' ? '/' : '/ru';
  const goToMain = translation.lang === 'EN' ? '/main' : '/ru/main';

  useEffect(() => {
    onAuthStateChanged(auth, (userVerified) => {
      if (userVerified) {
        setUser({ isAuth: true, email: userVerified.email as string });

        if (router.pathname === '/login' || router.pathname === '/ru/login') {
          router.push(goToMain);
        }
      } else {
        setUser({ isAuth: false, email: '' });

        if (router.pathname === '/main' || router.pathname === '/ru/main') {
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
        <link rel="icon" href="/logo_graphiql.png" sizes="32x32" />
        <title>GraphiQL</title>
      </Head>
      <GqlProvider>
        <Context.Provider value={user}>
          <Component {...pageProps} />
        </Context.Provider>
      </GqlProvider>
    </>
  );
};

export default MyApp;
