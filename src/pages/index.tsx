import Image from 'next/image';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../assets/styles/welcome.module.scss';

const Welcome = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.welcome}>
        <ul className={styles.welcome__info}>
          <li className={styles.welcome__info__item}>
            <span>Describe your data</span>
            <Image src="/pen.svg" alt="" height={100} width={100}></Image>
          </li>
          <li className={styles.welcome__info__item}>
            <span>Ask for what you want</span>
            <Image src="/ask.svg" alt="" height={100} width={100}></Image>
          </li>
          <li className={styles.welcome__info__item}>
            <span>Get predictable results</span>
            <Image src="/results.svg" alt="" height={100} width={100}></Image>
          </li>
        </ul>
        <Button onClick={() => {}} className={styles.welcome__button}>
          Get Started
        </Button>
      </main>
      <Footer />
    </>
  );
};

export default Welcome;
