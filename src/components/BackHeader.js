import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { HiOutlineChevronLeft } from 'react-icons/hi';

function BackHeader({ link }) {
  return (
    <Wrapper className='p-4'>
      <div className='container'>
        <header className='max-w-xl mx-auto flex flex-row justify-between items-center'>
          <Link to={link}>
            <button className='flex flex-row justify-between items-center'>
              <HiOutlineChevronLeft size='24' color='#121212' />
              <p className='text-sm text-gray-800'>Back</p>
            </button>
          </Link>
        </header>
      </div>
    </Wrapper>
  );
}

export default BackHeader;
