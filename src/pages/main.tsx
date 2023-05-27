//import { useRouter } from 'next/router';
import Image from 'next/image';
//import SignOut from '../components/SignOut';
import { useTranslation } from '../hooks/useTranslation';
import Layout from '../components/Layout/layout';
import styles from '../assets/styles/editor.module.scss';
import Button from '../components/Button';
import Textarea from '../components/Textarea';

const Main = (): JSX.Element => {
  const translation = useTranslation();

  return (
    <Layout>
      <div className={styles.editor__wrapper}>
        <section className={styles.editor__section}>
          <div className={styles.editor__section__docs}>
            <pre className={styles.editor__section__docs__text}></pre>
            <Button isTransparent className={styles.editor__section__docs__btn}>
              <Image src="/docs.svg" alt="" width={32} height={32}></Image>
            </Button>
          </div>
          <div className={styles.editor__section__codespace}>
            <div className={styles.codespace__editor}>
              <Textarea className={styles.codespace__editor__textarea}></Textarea>
              <Button className={styles.codespace__editor__btn} isIcon>
                <Image src="/play.svg" alt="" width={20} height={20}></Image>
              </Button>
            </div>
            <div className={styles.codespace__params}>
              <Textarea className={styles.codespace__params__textarea}></Textarea>
              <header className={styles.codespace__params__header}>
                <Button isTransparent className={styles.codespace__params__header__btn}>
                  {translation.variables}
                </Button>
                <Button isTransparent className={styles.codespace__params__header__btn}>
                  {translation.headers}
                </Button>
              </header>
            </div>
          </div>
          <Textarea className={styles.editor__section__result}></Textarea>
        </section>
      </div>
      {/* <SignOut /> */}
    </Layout>
  );
};

export default Main;
