import Link from 'next/link';
import Button from '../components/Button';
import styles from '../assets/styles/404.module.scss';
import Layout from '../components/Layout/layout';
import { useTranslation } from '../hooks/useTranslation';

const Error = (): JSX.Element => {
  const translation = useTranslation();

  return (
    <Layout>
      <div className={styles.error}>
        <h1 className={styles.error__title}>{translation.oops}</h1>
        <p className={styles.error__description}>{translation.thePageCannotBeFound}</p>
        <Link href="/">
          <Button>{translation.goHome}</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Error;
