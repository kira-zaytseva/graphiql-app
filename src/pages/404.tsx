import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../assets/styles/404.module.scss';

const Error = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.error}>
        <h1 className={styles.error__title}>Oops, something’s gone wrong!</h1>
        <p className={styles.error__description}>The page you are looking for cannot be found.</p>
        <Button onClick={() => {}}>Go Home</Button>
      </main>
      <Footer />
    </>
  );
};

export default Error;
