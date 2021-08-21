import { Helmet } from 'react-helmet';
import { useAuth0 } from '@auth0/auth0-react';
import { Wrapper } from '../components';

function Landing() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Helmet>
        <title>Tudu - Get started</title>
        <meta
          name='description'
          content='Welcome to Tudu! Here you can add and organise your to-do items. Get started today.'
        />
      </Helmet>
      <Wrapper className='h-screen'>
        <div className='container flex flex-col items-center justify-center h-full'>
          <section className='text-center'>
            <h1 className='mb-5 text-4xl font-bold text-transparent from-indigo-600 md:text-5xl bg-clip-text bg-gradient-to-tr from to-pink-400'>
              Tudu
            </h1>
            <h5 className='text-lg text-gray-800'>
              Stay on top of your to-dos
            </h5>
          </section>
          <section className='max-w-xs mx-auto mt-8'>
            <div className='flex flex-row items-center justify-between gap-x-5'>
              <button
                className='w-full px-10 py-3 font-semibold text-white transition duration-300 ease-in-out bg-indigo-500 rounded-md hover:bg-indigo-600'
                onClick={() =>
                  loginWithRedirect({
                    scope: 'manage:todos',
                  })
                }
              >
                Log in
              </button>
              <button
                className='w-full px-10 py-3 font-medium text-indigo-500 transition duration-300 ease-in-out border border-indigo-500 rounded-md hover:bg-indigo-50'
                onClick={() =>
                  loginWithRedirect({
                    screen_hint: 'signup',
                    scope: 'manage:todos',
                  })
                }
              >
                Register
              </button>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
}

export default Landing;
