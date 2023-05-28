import Image from 'next/image';
import { useContext } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import Layout from '../components/Layout/layout';
import { DeveloperInfo } from '../components/DeveloperInfo';
import { useTranslation } from '../hooks/useTranslation';
import Context from '../context/context';

import styles from '../assets/styles/welcome.module.scss';

enum DevelopersName {
  Kira = 'Kira',
  Evgeny = 'Evgeny',
  Anton = 'Anton',
}

const developers = [
  { name: DevelopersName.Kira, img: 'https://avatars.githubusercontent.com/u/60791496?v=4' },
  { name: DevelopersName.Evgeny, img: 'https://avatars.githubusercontent.com/u/112211574?v=4' },
  { name: DevelopersName.Anton, img: 'https://avatars.githubusercontent.com/u/54247716?s=40&v=4' },
];

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
                <Button>{translation.signIn}</Button>
              </Link>
            )}
            {!userData.isAuth && (
              <Link href={goToLogin} onClick={() => (userData.action = 'signUp')}>
                <Button>{translation.signUp}</Button>
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

        <div className={styles.welcome__developers}>
          {developers.map(({ name, img }) => (
            <DeveloperInfo
              key={name}
              img={img}
              description={translation[`descriptionDeveloper${name}`]}
              fullName={translation[`fullNameDeveloper${name}`]}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
