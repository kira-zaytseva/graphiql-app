import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import Button from '../Button';

const SignOut = (): JSX.Element => {
  const [error, setError] = useState<Error>(new Error(''));
  const translation = useTranslation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // router.push('/');
      })
      .catch((error: Error) => {
        setError(error);
        console.log(error.message);
      });
  };

  return (
    <>
      <Button onClick={handleSignOut}>{translation.signOut}</Button>
      {error && <span style={{ color: 'white' }}>{error.message}</span>}
    </>
  );
};

export default SignOut;
