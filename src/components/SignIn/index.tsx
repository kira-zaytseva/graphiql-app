import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../Form';
import { useRouter } from 'next/router';
import { auth } from '../../Firebase/firebase';
import useStorage from '../../Hooks/useStorage';

const SignIn = (): JSX.Element => {
  const route = useRouter();
  const { setItem } = useStorage();

  const handleSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const idToken = await user.getIdToken();
        console.log(`idToken = ${idToken}`);
        setItem('token', idToken, 'session');
        setItem('email', email, 'session');

        route.push('/main');
      })
      .catch((error) => console.log(error.message));
  };

  return <Form title="Sign In" handleClick={handleSignIn} />;
};

export default SignIn;
