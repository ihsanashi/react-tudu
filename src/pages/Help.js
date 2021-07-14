import { Helmet } from 'react-helmet';
import Wrapper from '../components/Wrapper';
import { Link } from 'react-router-dom';

function Help() {
  return (
    <>
      <Helmet>
        <title>Tudu - Help</title>
        <meta name='description' content='Get help using Tudu here.' />
      </Helmet>
      <Wrapper className='p-4'>
        <div className='container'>
          <div className='max-w-xl mx-auto'>
            <div className='py-4'>
              <h5 className='mb-3 text-lg font-medium md:text-xl'>
                Page under maintenance
              </h5>
              <Link
                to='/'
                className='inline-block font-medium text-gray-800 border-b border-black hover:text-blue-500 hover:border-blue-500'
              >
                Return to homepage
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Help;
