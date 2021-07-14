import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { HiOutlineChevronLeft } from 'react-icons/hi';

function BackHeader({ link }) {
  return (
    <Wrapper className='p-4 my-5'>
      <div className='container'>
        <header className='flex flex-row items-center justify-between max-w-xl mx-auto'>
          <Link to={link}>
            <button className='flex flex-row items-center justify-between group'>
              <HiOutlineChevronLeft
                size='24'
                className='text-gray-500 transition duration-300 ease-in-out group-hover:text-gray-800'
              />
              <p className='text-sm text-gray-500 transition duration-300 ease-in-out group-hover:text-gray-800'>
                Back
              </p>
            </button>
          </Link>
        </header>
      </div>
    </Wrapper>
  );
}

export default BackHeader;
