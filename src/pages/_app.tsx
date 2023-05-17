import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import './style.scss';

const MyApp = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>NextJS App From Scratch</title>
      </Head>
      <p>Hello</p>
      <Footer />
    </>
  );
};

export default MyApp;
