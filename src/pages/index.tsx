import Image from 'next/image';
import Button from '../components/Button';
import styles from '../assets/styles/welcome.module.scss';
import Layout from '../components/Layout/layout';

const Welcome = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.welcome}>
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
        <Button className={styles.welcome__button}>Get Started</Button>
      </div>
    </Layout>
  );
};

export default Welcome;
