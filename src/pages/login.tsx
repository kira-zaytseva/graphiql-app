import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import styles from '../assets/styles/welcome.module.scss';
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
      <div className="form-wrapper">{action === 'signIn' ? <SignIn /> : <SignUp />}</div>
      <p>or</p>
      <Button onClick={toggleAction} className={styles.welcome__button}>
        {action === 'signIn' ? translation.signUp : translation.signIn}
      </Button>
    </Layout>
  );
};

export default Login;
