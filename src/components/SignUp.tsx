import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { AppDispatch } from '../Redux/store';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser } from '../Redux/Reducers/userSlice';
import { auth } from '../pages/_app';

const SignUp = (): JSX.Element => {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const route = useRouter();

  const handleSignUp = (email: string, password: string) => {
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email as string,
            id: user.uid,
            refreshToken: user.refreshToken,
          })
        );
        route.push('/main');
      })
      .catch((error) => alert(error.message));
  };

  return <Form title="Sign Up" handleClick={handleSignUp} />;
};

export default SignUp;
