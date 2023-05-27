import { createUserWithEmailAndPassword } from 'firebase/auth';
import Form from '../Form';
import { auth } from '../../Firebase/firebase';
import { useCallback, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

type FormData = {
  email: string;
  password: string;
};

const SignUp = (): JSX.Element => {
  const [error, setError] = useState<Error>(new Error(''));
  const translation = useTranslation();

  const handleSignUp = useCallback(
    async (data: FormData) => {
      try {
        // const { user } = await signInWithEmailAndPassword(auth, data.email, data.password);
        await createUserWithEmailAndPassword(auth, data.email, data.password);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      }
    },
    [setError]
  );

  return (
    <>
      <Form title={translation.signUp} onSendRequest={handleSignUp} />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </>
  );
};

export default SignUp;
