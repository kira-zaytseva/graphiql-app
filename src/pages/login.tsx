import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Layout from '../components/Layout/layout';

const Login = (): JSX.Element => {
  return (
    <Layout>
      <h3>Sign In & Sign Up Page</h3>
      <div>
        <span>If you have account sign in </span>
        <SignIn />
      </div>
      <div>
        <span>If you want to register </span>
        <SignUp />
      </div>
    </Layout>
  );
};

export default Login;
