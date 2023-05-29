import React from 'react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import styles from './style.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  );
}
