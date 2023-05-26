import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';

const SignIn = (): JSX.Element => {
  const [error, setError] = useState<Error>(new Error(''));

  const handleSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(`User.email = ${user.email}, redirect to Main Page`);
      })
      .catch((error: Error) => {
        setError(error);
        console.log(error.message);
      });
  };

  return (
    <>
      <Form title="Sign In" handleClick={handleSignIn} />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </>
  );
};

export default SignIn;
