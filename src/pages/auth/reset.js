import { Helmet } from 'react-helmet';
import AuthHeader from '../../components/AuthHeader';
import Wrapper from '../../components/Wrapper';

function ResetPassword() {
  return (
    <>
      <Helmet>
        <title>Tudu - Reset Password</title>
        <meta
          name='description'
          content='Reset your password to regain access to your account and to-dos.'
        />
      </Helmet>
      <AuthHeader pageTitle='Forgot password?' />
      <Wrapper className='p-4 my-5'>
        <div className='container'>
          <h3>Reset your password</h3>
        </div>
      </Wrapper>
    </>
  );
}

export default ResetPassword;
