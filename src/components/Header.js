import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
  const { logout } = useAuth0();

  return (
    <Wrapper className='p-4 bg-indigo-200 shadow-sm'>
      <div className='container'>
        <header className='flex flex-row items-center justify-between max-w-xl mx-auto'>
          <Link
            to='/'
            className='inline-block text-lg font-semibold text-black transition duration-300 ease-in-out border-b border-transparent hover:border-black'
          >
            Tudu
          </Link>
          <button
            className='px-2 py-1 text-sm font-medium text-gray-600 transition duration-300 ease-in-out rounded-md hover:text-white hover:bg-red-500'
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        </header>
      </div>
    </Wrapper>
  );
}

export default Header;
