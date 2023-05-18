import Image from 'next/image';
import Button from '../Button/index';
import styles from './style.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image src="/logo_graphiql.png" alt="" height={60} width={60}></Image>
        <span>GraphiQL</span>
      </div>
      <Button
        className={styles.header__lang}
        onClick={() => console.log('switched')}
        isTransparent={true}
      >
        EN
      </Button>
    </header>
  );
};

export default Header;
