import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

// import { useAppSelector } from '../Redux/store';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.userReducer);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
