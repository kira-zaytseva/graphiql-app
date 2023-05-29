import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import styles from '../assets/styles/login.module.scss';
import Layout from '../components/Layout/layout';
import { useState } from 'react';
import Button from '../components/Button';
import { useTranslation } from '../hooks/useTranslation';
import Context from '../context/context';
import { useContext } from 'react';

const Login = (): JSX.Element => {
  const { action } = useContext(Context);
  let actionReq = action;
  if (actionReq === undefined) actionReq = 'signIn';

  const [act, setAct] = useState(actionReq);
  const translation = useTranslation();

  const toggleAction = () => {
    if (act === 'signIn') setAct('signUp');
    else setAct('signIn');
  };

  return (
    <Layout>
      <div className={styles.login}>
        <div className={styles.login__wrapper}>{act === 'signIn' ? <SignIn /> : <SignUp />}</div>
        <p className={styles.login__or}>{translation.or}</p>
        <Button onClick={toggleAction}>
          {act === 'signIn' ? translation.signUp : translation.signIn}
        </Button>
      </div>
    </Layout>
  );
};

export default Login;
