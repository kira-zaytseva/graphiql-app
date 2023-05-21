import { signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { AppDispatch } from '../Redux/store';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser } from '../Redux/Reducers/userSlice';
import { auth } from '../pages/_app';

const SignIn = (): JSX.Element => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const route = useRouter();

  const handleSignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(
          setUser({
            email: user.email as string,
            id: user.uid,
            refreshToken: user.refreshToken,
          })
        );
        // const idToken = await user.getIdToken();
        // console.log(`idToken = ${idToken}`);
        route.push('/main');
      })
      .catch((error) => alert(error.message));
  };

  return <Form title="Sign In" handleClick={handleSignIn} />;
};

export default SignIn;
