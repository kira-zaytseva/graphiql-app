import Button from '../components/Button';
import styles from '../assets/styles/404.module.scss';
import Layout from '../components/Layout/layout';
import Link from 'next/link';

const Error = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.error}>
        <h1 className={styles.error__title}>Oops, something’s gone wrong!</h1>
        <p className={styles.error__description}>The page you are looking for cannot be found.</p>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Error;
