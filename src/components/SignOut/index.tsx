import Image from 'next/image';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';
// import { useTranslation } from '../../hooks/useTranslation';
// import Button from '../Button';
import styles from './style.module.scss';

const SignOut = (): JSX.Element => {
  // const [error, setError] = useState<Error>(new Error(''));
  // const translation = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
    } catch (err) {
      if (err instanceof Error) {
        // setError(err);
      }
    }
    setIsLoading(false);
  };

  // return <Image src="/exit.png" alt="" height={40} width={40}></Image>;
  return <div onClick={handleSignOut}></div>;
};

export default SignOut;
