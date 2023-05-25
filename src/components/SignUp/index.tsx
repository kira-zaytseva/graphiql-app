import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form';
// import { useRouter } from 'next/router';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';

const SignUp = (): JSX.Element => {
  // const route = useRouter();
  const [error, setError] = useState<Error>(new Error(''));

  const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(`User.email = ${user.email}, redirect to Main Page`);

        // route.push('/main');
      })
      .catch((error: Error) => {
        setError(error);
        console.log(error.message);
      });
  };

  return (
    <>
      <Form title="Sign Up" handleClick={handleSignUp} />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </>
  );
};

export default SignUp;
