import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import Layout from '../components/Layout';
import '../Firebase/firebase';
import '../styles/styles.css';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Firebase/firebase';
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();

  useEffect(() => {
    // подписка на изменение валидности токена
    onIdTokenChanged(auth, (data) => {
      if (data) {
        console.log(`id is valid`);
      } else {
        // проверить, если на main page, то перейти на welcome page
        if (route.pathname === '/main') route.push('/');
        else console.log(`id is invalid, please sign in or sign up!`);
      }
    });
  });

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
