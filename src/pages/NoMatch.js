import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet';
import Wrapper from '../components/Wrapper';
import { Link } from 'react-router-dom';

function NoMatch() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <meta name='description' content='Page not found' />
        <title>{`Error 404: ${location.pathname} not found`}</title>
      </Helmet>
      <Wrapper className='p-4'>
        <div className='container'>
          <div className='max-w-xl mx-auto'>
            <div className='py-4'>
              <h1 className='text-2xl font-semibold mb-4'>
                404 Error, page not found
              </h1>
              <h3 className='text-gray-700 text-lg font-normal'>
                No match for <code>{location.pathname}</code>
              </h3>
              <div className='mt-5'>
                <Link
                  to='/'
                  className='font-medium text-gray-800 hover:text-blue-500 border-b border-black hover:border-blue-500'
                >
                  Return to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default NoMatch;
