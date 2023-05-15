import { RootState } from '../Redux/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Welcome = () => {
  const user = useAppSelector((state) => state.userReducer);
  const isAuth = !!useAppSelector((state) => state.userReducer.email);
  const lang = useAppSelector((state) => state.langReducer.lang);

  return (
    <>
      <hr></hr>
      <h3>Welcome Page</h3>
      <p>
        User: email={user.email}, token={user.token}, id={user.id}
      </p>
      <p>isAuth = {String(isAuth)}</p>
      <p>language = {lang}</p>
      <hr></hr>
    </>
  );
};

export default Welcome;
