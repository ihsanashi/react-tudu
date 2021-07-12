import { Helmet } from 'react-helmet';
import AuthHeader from '../../components/AuthHeader';
import Wrapper from '../../components/Wrapper';

function Register() {
  return (
    <>
      <Helmet>
        <title>Tudu - Register</title>
        <meta
          name='description'
          content='Register to create a new account, and start organising your to-dos!'
        />
      </Helmet>
      <AuthHeader pageTitle='Register' />
      <Wrapper className='p-4 my-5'>
        <div className='container'>
          <h2>Register</h2>
        </div>
      </Wrapper>
    </>
  );
}

export default Register;
