import { HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';
import Wrapper from './Wrapper';

function Header() {
  return (
    <Wrapper className='p-4 bg-indigo-500'>
      <div className='container'>
        <header className='max-w-xl mx-auto flex flex-row justify-between items-center'>
          <button className='rounded-full p-2'>
            <HiOutlineUser
              className='text-gray-200'
              size='22'
              title='Profile icon'
            />
          </button>
          <h6 className='text-lg font-semibold text-white'>Tudu</h6>
          <button className='rounded-lg p-2'>
            <HiOutlineSearch
              className='text-gray-200'
              size='20'
              title='Search icon'
            />
          </button>
        </header>
      </div>
    </Wrapper>
  );
}

export default Header;
