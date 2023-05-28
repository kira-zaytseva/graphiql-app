import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../Button/index';
import styles from './style.module.scss';
import { useTranslation } from '../../hooks/useTranslation';
import SignOut from '../SignOut';
import Context from '../../context/context';
import { useContext } from 'react';

const Header = () => {
  const router = useRouter();
  const translation = useTranslation();

  const userData = useContext(Context);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo}>
        <Image src="/logo_graphiql.png" alt="" height={60} width={60}></Image>
        <span className={styles.header__logo__text}>GraphiQL</span>
      </Link>
      <div className={styles.header__buttons}>
        <Link href={router.pathname} locale={router.locale === 'en' ? 'ru' : 'en'}>
          <Button className={styles.header__buttons__lang} isTransparent>
            {translation.lang}
          </Button>
        </Link>
        {userData.isAuth && <SignOut />}
      </div>
    </header>
  );
};

export default Header;
