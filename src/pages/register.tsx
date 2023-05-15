import { RootState } from '../Redux/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignUp from '../components/SignUp';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Register = () => {
  const user = useAppSelector((state) => state.userReducer);
  // const lang = useAppSelector((state) => state.langReducer.lang);

  const isAuth = !!user.email;
  const router = useRouter();

  useEffect(() => {
    if (isAuth) router.push('/main');
  }, [isAuth, router, user]);

  return (
    <>
      <h3>Register Page</h3>
      <hr></hr>
      {/* <p>INFO:</p>
      <p>lang = {lang}</p>
      <p>email = {user.email}</p> */}
      <SignUp />
      <hr></hr>
    </>
  );
};

export default Register;
