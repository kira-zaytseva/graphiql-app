import { signInWithEmailAndPassword } from 'firebase/auth';
import Form from '../Form';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

type FormData = {
  email: string;
  password: string;
};

const SignIn = (): JSX.Element => {
  const [error, setError] = useState<Error>(new Error(''));
  const translation = useTranslation();

  const handleSignIn = (data: FormData) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
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
      <Form title={translation.signIn} onSendRequest={handleSignIn} />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </>
  );
};

export default SignIn;
