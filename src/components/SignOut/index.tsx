import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../../Firebase/firebase';
import useStorage from '../../Hooks/useStorage';

const SignOut = (): JSX.Element => {
  const route = useRouter();
  const { removeItem, getItem } = useStorage();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        removeItem('token', 'session');
        removeItem('email', 'session');
        route.push('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <button onClick={handleLogOut}>SignOut `{getItem('email', 'session')}`</button>
    </>
  );
};

export default SignOut;
