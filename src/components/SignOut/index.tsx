import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';
import styles from '../../components/Header/style.module.scss';

const SignOut = (): JSX.Element => {
  const [error, setError] = useState<boolean>(false);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch {
      setError(true);
    }
  };

  return (
    <>
      {!error && <div onClick={handleSignOut}></div>}
      {error && <div className={styles.header__buttons__error} onClick={handleSignOut}></div>}
    </>
  );
};

export default SignOut;
