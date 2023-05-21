import Link from 'next/link';
import { RootState } from '../Redux/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Main = (): JSX.Element => {
  const user = useAppSelector((state) => state.userReducer);
  const isAuth = !!user.email;
  const lang = useAppSelector((state) => state.langReducer.lang);

  return (
    <>
      <h3>Main Page</h3>
      <hr></hr>
      <p>email = {user.email}</p>
      <p>user_id = {user.id}</p>
      <p>refreshToken = {user.refreshToken}</p>
      <hr></hr>
      <p>isAuth = {String(isAuth)}</p>
      <p>language = {lang}</p>
      <Link className="link" href="/">
        Welcome page
      </Link>
    </>
  );
};

export default Main;
