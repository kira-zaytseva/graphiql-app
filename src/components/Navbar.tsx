import Link from 'next/link';
import { RootState } from '../Redux/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// import { setUser } from '../Redux/Reducers/userSlice';
import { useState } from 'react';

// const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Navbar = () => {
  const user = useAppSelector((state) => state.userReducer);
  // const dispatch = useAppDispatch();
  const router = useRouter();

  const [hasLogged] = useState(!!user.email);

  return (
    <nav className="navigation">
      {/* если не залогинен, показать кнопки sign in и sign up */}
      {!hasLogged && (
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
      {/* пока просто переход на главную */}
      {hasLogged && (
        <Link className="link" href="/main">
          logout {user.email}
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
