import { useRouter } from 'next/router';
import { ru } from '../locales/ru';
import { en } from '../locales/en';

export const useTranslation = () => {
  const router = useRouter();

  const locale = router.locale === 'en' ? en : ru;
  return locale;
};
