import Navbar from './Navbar';
import { setLang } from '../Redux/Reducers/langSlice';
import { AppDispatch, RootState } from '../Redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const Header = () => {
  const lang = useAppSelector((state) => state.langReducer.lang);
  const dispatch = useAppDispatch();

  const handleLang = (): void => {
    if (lang === 'en') dispatch(setLang({ lang: 'ru' }));
    else dispatch(setLang({ lang: 'en' }));
  };

  return (
    <header>
      <button onClick={handleLang}>{lang}</button>
      <Navbar />
    </header>
  );
};

export default Header;
