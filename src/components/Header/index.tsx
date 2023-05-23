import Image from 'next/image';
import Button from '../Button/index';
import styles from './style.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.header__logo}>
        <Image src="/logo_graphiql.png" alt="" height={60} width={60}></Image>
        <span className={styles.header__logo__text}>GraphiQL</span>
      </Link>
      <Button className={styles.header__lang} isTransparent>
        EN
      </Button>
    </header>
  );
};

export default Header;
