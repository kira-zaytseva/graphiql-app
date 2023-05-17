import Image from 'next/image';
import styles from './style.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.footer__link}
        href="https://github.com/eys-man"
        target="_blank"
        rel="noreferrer"
      >
        eys-man
      </a>
      <a
        className={styles.footer__link}
        href="https://github.com/kubana6"
        target="_blank"
        rel="noreferrer"
      >
        kubana6
      </a>
      <a
        className={styles.footer__link}
        href="https://github.com/kira-zaytseva"
        target="_blank"
        rel="noreferrer"
      >
        kira-zaytseva
      </a>
      <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
        <Image src="/rs_school_js1.png" alt="" width={102} height={38} />
      </a>
      <span>2023</span>
    </footer>
  );
};

export default Footer;
