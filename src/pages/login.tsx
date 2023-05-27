import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import styles from '../assets/styles/login.module.scss';
import Layout from '../components/Layout/layout';
import { useState } from 'react';
import Button from '../components/Button';
import { useTranslation } from '../hooks/useTranslation';

const Login = (): JSX.Element => {
  const [action, setAction] = useState('signIn');
  const translation = useTranslation();

  const toggleAction = () => {
    if (action === 'signIn') setAction('signUp');
    else setAction('signIn');
  };

  return (
    <Layout>
      {/* <div className={styles.login}> */}
      <div className={styles.login}>
        <div className={styles.login__wrapper}>{action === 'signIn' ? <SignIn /> : <SignUp />}</div>
        <p className={styles.login__or}>{translation.or}</p>
        <Button onClick={toggleAction}>
          {action === 'signIn' ? translation.signUp : translation.signIn}
        </Button>
      </div>
    </Layout>
  );
};

export default Login;
