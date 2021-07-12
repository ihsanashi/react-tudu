import { Helmet } from 'react-helmet';
import AuthHeader from '../../components/AuthHeader';
import Wrapper from '../../components/Wrapper';

function Login() {
  return (
    <>
      <Helmet>
        <title>Tudu - Login</title>
        <meta
          name='description'
          content='Login to gain access to your to-dos'
        />
      </Helmet>
      <AuthHeader pageTitle='Login' />
      <Wrapper className='p-4 my-5'>
        <div className='container'>
          <h2>Login</h2>
        </div>
      </Wrapper>
    </>
  );
}

export default Login;
