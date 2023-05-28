/* eslint-disable react/jsx-key */
import Image from 'next/image';
import { useTranslation } from '../hooks/useTranslation';
import Layout from '../components/Layout/layout';
import styles from '../assets/styles/editor.module.scss';
import Button from '../components/Button';
import Textarea from '../components/Textarea';
import { useEffect, useState } from 'react';
import { GqlProvider } from '../context/gqlContext';
import { useFilmsQuery } from '../hooks/gql';

enum PARAMS {
  VARIABLES = 'VARIABLES',
  HEADERS = 'HEADERS',
}

const Main = (): JSX.Element => {
  const translation = useTranslation();
  const [activeParam, setActiveParam] = useState(PARAMS.VARIABLES);
  const [minMaxSize, setMinMaxSize] = useState('max');
  const {
    query,
    variables,
    headers,
    filmsData,
    isLoading,
    error,
    docTree,
    setQuery,
    setVariables,
    setHeaders,
    getFilms,
  } = useFilmsQuery();

  const toggleView = () => {
    if (minMaxSize === 'max') setMinMaxSize('min');
    else setMinMaxSize('max');
    // console.log(`TOGGLE: ${minMaxSize}`);
  };

  return (
    <Layout>
      <GqlProvider>
        <div className={styles.editor__wrapper}>
          <section className={styles.editor__section}>
            <div className={styles.editor__section__docs}>
              <pre className={styles.editor__section__docs__text}></pre>
              <Button isTransparent className={styles.editor__section__docs__btn}>
                <Image src="/docs.svg" alt="" width={32} height={32}></Image>
              </Button>
            </div>
            <div className={styles.editor__section__codespace}>
              <div
                className={styles.codespace__editor}
                style={minMaxSize === 'min' ? { height: '96%' } : { height: '70%' }}
              >
                <Textarea
                  className={styles.codespace__editor__textarea}
                  value={query}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setQuery(e.target.value)}
                ></Textarea>
                <Button
                  className={styles.codespace__editor__btn}
                  isIcon
                  onClick={() => getFilms()}
                  isLoading={isLoading}
                >
                  <Image src="/play.svg" alt="" width={20} height={20}></Image>
                </Button>
              </div>
              <div
                className={styles.codespace__params}
                style={minMaxSize === 'min' ? { height: '4%' } : { height: '30%' }}
              >
                <Textarea
                  className={`${styles.codespace__params__textarea} ${
                    activeParam === PARAMS.HEADERS ? 'd-none' : ''
                  }`}
                  value={variables}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setVariables(e.target.value);
                  }}
                ></Textarea>
                <Textarea
                  className={`${styles.codespace__params__textarea} ${
                    activeParam === PARAMS.VARIABLES ? 'd-none' : ''
                  }`}
                  value={headers}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setHeaders(e.target.value);
                  }}
                ></Textarea>
                {/*-------------- { начало блока } ---------------*/}
                <header
                  className={styles.codespace__params__header}
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <Button
                      isTransparent
                      className={`${styles.codespace__params__header__btn} ${
                        activeParam === PARAMS.VARIABLES ? 'color-black' : ''
                      }`}
                      onClick={() => setActiveParam(PARAMS.VARIABLES)}
                    >
                      {translation.variables}
                    </Button>
                    <Button
                      isTransparent
                      className={`${styles.codespace__params__header__btn} ${
                        activeParam === PARAMS.HEADERS ? 'color-black' : ''
                      }`}
                      onClick={() => setActiveParam(PARAMS.HEADERS)}
                    >
                      {translation.headers}
                    </Button>
                  </div>
                  <div style={{ paddingRight: '1rem' }}>
                    <Button
                      isTransparent
                      className={`${styles.codespace__params__header__btn} color-black`}
                      onClick={() => toggleView()}
                    >
                      {minMaxSize === 'min' ? `˄` : `˅`}
                    </Button>
                  </div>
                </header>
                {/* ------------------------------ */}
              </div>
            </div>
            <Textarea
              className={styles.editor__section__result}
              value={error ? error : JSON.stringify(filmsData, null, 2)}
              disabled
            ></Textarea>
          </section>
        </div>
        {/* <SignOut /> */}
      </GqlProvider>
    </Layout>
  );
};

export default Main;
