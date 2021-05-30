import { HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Banner() {
  const [close, setClose] = useState(false);

  const closeModal = () => {
    setClose(true);
  };

  return (
    !close && (
      <div className='max-w-xl mx-auto fixed bottom-8 left-4 right-4'>
        <div className='container p-4 rounded-lg border border-purple-600 bg-purple-100'>
          <div className='flex flex-row items-start justify-between'>
            <p className='text-sm text-gray-700'>
              A new to-do has been added to your list. Add more, or go back to
              the{' '}
              <Link
                className='border-b border-purple-600 text-purple-600 font-medium'
                to='/'
              >
                homepage
              </Link>
              .
            </p>
            <button type='button' onClick={closeModal}>
              <span className='sr-only'>Dismiss</span>
              <HiOutlineX
                size='20'
                className='text-purple-600'
                title='Close banner'
              />
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Banner;
