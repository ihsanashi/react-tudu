import { Helmet } from 'react-helmet';
import AuthHeader from '../../components/AuthHeader';
import Wrapper from '../../components/Wrapper';

function ResetPasswordStatus() {
  return (
    <>
      <Helmet>
        <title>Tudu - Password Reset Status</title>
        <meta
          name='description'
          content='View the status of your password reset attempt.'
        />
      </Helmet>
      <AuthHeader pageTitle='Password Reset Status' />
      <Wrapper className='p-4 my-5'>
        <div className='container'>
          <h3>Password reset status</h3>
        </div>
      </Wrapper>
    </>
  );
}

export default ResetPasswordStatus;
