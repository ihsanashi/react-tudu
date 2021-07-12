import { Link } from 'react-router-dom';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import Wrapper from './Wrapper';

function AuthHeader({ pageTitle }) {
  return (
    <Wrapper className='p-4 mb-5 bg-indigo-500'>
      <div className='container'>
        <header className='flex flex-row items-center justify-between max-w-xl mx-auto'>
          <Link to='/'>
            <button className='flex flex-row items-center justify-between'>
              <HiOutlineChevronLeft size='24' className='text-gray-200' />
              <p className='text-sm text-gray-200'>Back</p>
            </button>
          </Link>
          <h6 className='text-base font-semibold text-center text-white md:text-lg'>
            {pageTitle}
          </h6>
          <Link to='/help'>
            <p className='text-sm font-normal text-gray-200'>Help?</p>
          </Link>
        </header>
      </div>
    </Wrapper>
  );
}

export default AuthHeader;
