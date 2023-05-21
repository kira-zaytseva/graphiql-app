// import Link from 'next/link';
import { AppDispatch, RootState } from '../Redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../pages/_app';
import { setUser } from '../Redux/Reducers/userSlice';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

const Navbar = (): JSX.Element => {
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(
          setUser({
            email: '',
            id: '',
            refreshToken: '',
          })
        );
      })
      .catch((error) => console.log(error));
    // router.push('/');
  };

  return (
    <nav className="navigation">
      {/* если не залогинен, показать кнопки sign in и sign up */}
      {user.refreshToken === '' && (
        <div>
          <button className="link" onClick={() => router.push('/login')}>
            Sign in
          </button>
          <button className="link" onClick={() => router.push('/register')}>
            Sign up
          </button>
        </div>
      )}
      {/* если залогинен, показать кнопку logout */}
      {user.refreshToken !== '' && (
        <button className="link" onClick={logout}>
          Logout `{user.email}`
        </button>
      )}
    </nav>
  );
};

export default Navbar;
