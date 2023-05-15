import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { AppDispatch } from '../Redux/store';
import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/router';
import { setUser } from '../Redux/Reducers/userSlice';

const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SignIn = () => {
  const dispatch = useAppDispatch();

  // const route = useRouter();

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // console.log(user);
        dispatch(
          setUser({
            email: user.email as string,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        // route.push('/');
      })
      .catch(() => alert('Invalid user!'));
  };

  return <Form title="Sign In" handleClick={handleSignIn} />;
};

export default SignIn;
