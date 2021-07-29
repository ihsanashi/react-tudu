import { Helmet } from 'react-helmet';
import { TodoContext } from '../contexts/TodoContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header, List, Wrapper } from '../components';

function Home() {
  const { todos } = useContext(TodoContext);

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Minimal To-do List application for you to manage your tasks.'
        />
        <title>Tudu - Minimal To-do List</title>
      </Helmet>
      <Header />
      <Wrapper className='p-4 my-5 text-center'>
        <div className='container'>
          {todos.length === 0 ? (
            <div className='max-w-xl mx-auto'>
              <h5 className='text-lg font-normal text-gray-700'>
                You have no todos at the moment.
              </h5>
              <Link
                to='/new'
                className='font-medium text-gray-800 transition duration-300 ease-in-out border-b border-black hover:text-indigo-500 hover:border-indigo-500'
              >
                Why not add some?
              </Link>
            </div>
          ) : (
            <List />
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
