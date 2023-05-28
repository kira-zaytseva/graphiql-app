import Image from 'next/image';
import Button from '../components/Button';
import styles from '../assets/styles/welcome.module.scss';
import Layout from '../components/Layout/layout';
import { useTranslation } from '../hooks/useTranslation';
import Context from '../context/context';
import { useContext } from 'react';
import Link from 'next/link';

const Welcome = (): JSX.Element => {
  const translation = useTranslation();
  const userData = useContext(Context);

  const goToLogin = translation.lang === 'EN' ? '/login' : '/ru/login';
  const goToMain = translation.lang === 'EN' ? '/main' : '/ru/main';

  return (
    <Layout>
      <div className={styles.welcome}>
        <div className={styles.welcome__wrapper}>
          <div className={styles.welcome__wrapper__authBtns}>
            {!userData.isAuth && (
              <Link href={goToLogin} onClick={() => (userData.action = 'signIn')}>
                <Button className={styles.authBtns}>{translation.signIn}</Button>
              </Link>
            )}
            {!userData.isAuth && (
              <Link href={goToLogin} onClick={() => (userData.action = 'signUp')}>
                <Button className={styles.authBtns}>{translation.signUp}</Button>
              </Link>
            )}
            {userData.isAuth && (
              <Link href={goToMain} onClick={() => (userData.action = 'Get Started')}>
                <Button>{translation.getStarted}</Button>
              </Link>
            )}
          </div>
        </div>
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
      </div>
    </Layout>
  );
};

export default Welcome;
