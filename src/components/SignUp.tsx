import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { AppDispatch } from '../Redux/store';
import { useDispatch } from 'react-redux';
// import { useRouter } from 'next/router';
import { setUser } from '../Redux/Reducers/userSlice';

const useAppDispatch = () => useDispatch<AppDispatch>();
// const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SignUp = () => {
  const dispatch = useAppDispatch();

  // const route = useRouter();

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
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

  return <Form title="Sign Up" handleClick={handleSignUp} />;
};

export default SignUp;
