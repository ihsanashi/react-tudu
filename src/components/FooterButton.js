import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

function FooterButton({ link, title, icon }) {
  return (
    <Wrapper className='px-4'>
      <div className='container'>
        <footer className='fixed max-w-xl bottom-5 left-4 right-4 mx-auto'>
          <Link to={link}>
            <button className='bg-green-500 hover:bg-green-600 w-full py-3 px-8 rounded-lg flex items-center justify-center group shadow-md hover:shadow-lg'>
              {icon && icon}
              <p
                className={`text-base font-medium text-white capitalize tracking-wider ${
                  icon && 'ml-2'
                }`}
              >
                {title}
              </p>
            </button>
          </Link>
        </footer>
      </div>
    </Wrapper>
  );
}

export default FooterButton;
