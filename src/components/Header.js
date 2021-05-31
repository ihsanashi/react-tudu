import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

function Header({ left, right }) {
  return (
    <Wrapper className='p-4 bg-indigo-500'>
      <div className='container'>
        <header className='max-w-xl mx-auto flex flex-row justify-between items-center'>
          {left}
          <Link to='/' className='text-lg font-semibold text-white'>
            Tudu
          </Link>
          {right}
        </header>
      </div>
    </Wrapper>
  );
}

export default Header;
