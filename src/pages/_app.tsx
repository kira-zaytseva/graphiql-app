import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../Redux/store';
import Layout from '../components/Layout';
import '../Firebase/firebase';
import '../styles/styles.css';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Firebase/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  initializeApp(firebaseConfig);
  // const firebaseApp = initializeApp(firebaseConfig);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
