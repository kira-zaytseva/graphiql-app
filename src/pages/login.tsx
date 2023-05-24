import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
// import styles from '../assets/styles/welcome.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStorage from '../Hooks/useStorage';
import Layout from '../components/Layout/layout';

const Login = (): JSX.Element => {
  const { getItem } = useStorage();
  const token = getItem('token');
  const router = useRouter();

  useEffect(() => {
    if (token) {
      console.log(`redirect to Main Page`);
      router.push('/main');
    }
  });

  return (
    <Layout>
      <h3>Sign In & Sign Up Page</h3>
      <div>
        <span>If you have account sign in </span>
        <SignIn />
      </div>
      <div>
        <span>If you want to register </span>
        <SignUp />
      </div>
    </Layout>
  );
};

export default Login;
