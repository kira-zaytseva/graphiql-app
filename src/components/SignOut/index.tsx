import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import Button from '../Button';

const SignOut = (): JSX.Element => {
  const [error, setError] = useState<Error>(new Error(''));
  const translation = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Button onClick={handleSignOut} isLoading={isLoading}>
        {translation.signOut}
      </Button>
      {error && <span style={{ color: 'white' }}>{error.message}</span>}
    </>
  );
};

export default SignOut;
