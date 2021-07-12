import { Helmet } from 'react-helmet';
import Wrapper from '../components/Wrapper';

function Help() {
  return (
    <>
      <Helmet>
        <title>Tudu - Help</title>
        <meta name='description' content='Get help using Tudu here.' />
      </Helmet>
      <Wrapper className='p-4 my-5'>
        <div className='container'>
          <h2>Get help</h2>
        </div>
      </Wrapper>
    </>
  );
}

export default Help;
