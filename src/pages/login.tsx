import { RootState } from '../Redux/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignIn from '../components/SignIn';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Login = (): JSX.Element => {
  const user = useAppSelector((state) => state.userReducer);
  const isAuth = !!user.email;
  const lang = useAppSelector((state) => state.langReducer.lang);

  const router = useRouter();

  useEffect(() => {
    if (isAuth) router.push('/main');
  }, [isAuth, router, user]);

  return (
    <>
      <h3>Login Page</h3>
      <hr></hr>
      <p>email = {user.email}</p>
      <p>user_id = {user.id}</p>
      <p>refreshToken = {user.refreshToken}</p>
      <hr></hr>
      <p>isAuth = {String(isAuth)}</p>
      <p>language = {lang}</p>
      <hr></hr>
      <SignIn />
    </>
  );
};

export default Login;
