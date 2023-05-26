import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';

const SignOut = (): JSX.Element => {
  const [error, setError] = useState<Error>(new Error(''));

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
      <button onClick={handleSignOut}>Sign Out</button>
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </>
  );
};

export default SignOut;
