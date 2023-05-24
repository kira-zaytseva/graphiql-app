import { useRouter } from 'next/router';
import SignOut from '../components/SignOut';
import { useEffect } from 'react';
import useStorage from '../Hooks/useStorage';
import Layout from '../components/Layout/layout';

const Main = (): JSX.Element => {
  const { getItem } = useStorage();
  const token = getItem('token');
  console.log(`token = ${token}`);
  // const email = getItem('email');
  const route = useRouter();

  useEffect(() => {
    if (token) {
      console.log(`token есть`);
    } else {
      console.log('redirect to Welcome Page');
      route.push('/');
    }
  });

  return (
    <Layout>
      <h3>Main Page</h3>
      <SignOut />
    </Layout>
  );
};

export default Main;
