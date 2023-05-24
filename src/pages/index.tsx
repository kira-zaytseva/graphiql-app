import Image from 'next/image';
import Button from '../components/Button';
import styles from '../assets/styles/welcome.module.scss';
import Layout from '../components/Layout/layout';
import { useTranslation } from '../hooks/useTranslation';

const Welcome = (): JSX.Element => {
  const translation = useTranslation();

  return (
    <Layout>
      <div className={styles.welcome}>
        <ul className={styles.welcome__info}>
          <li className={styles.welcome__info__item}>
            <span>{translation.describeData}</span>
            <Image src="/pen.svg" alt="" height={100} width={100}></Image>
          </li>
          <li className={styles.welcome__info__item}>
            <span>{translation.askForWhatYouWant}</span>
            <Image src="/ask.svg" alt="" height={100} width={100}></Image>
          </li>
          <li className={styles.welcome__info__item}>
            <span>{translation.getPredictableResults}</span>
            <Image src="/results.svg" alt="" height={100} width={100}></Image>
          </li>
        </ul>
        <Button className={styles.welcome__button}>{translation.getStarted}</Button>
      </div>
    </Layout>
  );
};

export default Welcome;
