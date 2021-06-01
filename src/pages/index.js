import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import { HiOutlineUser } from 'react-icons/hi';
import { TodoContext } from '../contexts/TodoContext';
import { useContext } from 'react';
import Wrapper from '../components/Wrapper';
import { Link } from 'react-router-dom';
import List from '../components/List';
import { ACTIONS } from '../reducers/TodoReducer';

function Home() {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='Minimal To-do List application for you to manage your tasks.'
        />
        <title>Tudu - Minimal To-do List</title>
      </Helmet>
      <Header
        left={
          <button className='rounded-full p-2'>
            <HiOutlineUser
              className='text-gray-200'
              size='22'
              title='Profile icon'
            />
          </button>
        }
        right={
          <input
            type='text'
            className='mt-0 block bg-indigo-500 px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-white text-sm text-white placeholder-gray-300'
            placeholder='Search...'
          />
        }
      />
      <Wrapper className='p-4 my-8 text-center'>
        <div className='container'>
          {todos.length === 0 ? (
            <div className='max-w-xl mx-auto'>
              <h5 className='text-lg text-gray-700 font-normal'>
                You have no todos at the moment.
              </h5>
              <Link
                to='/new'
                className='font-medium text-gray-800 hover:text-blue-500 border-b border-black hover:border-blue-500'
              >
                Why not add some?
              </Link>
            </div>
          ) : (
            <List />
          )}
          {todos.length !== 0 && (
            <div className='max-w-xl mx-auto flex flex-col items-center justify-center my-5'>
              <Link
                to='/new'
                className='w-full flex items-center justify-center'
              >
                <button className='bg-green-500 hover:bg-green-600 py-3 px-8 rounded-lg w-full shadow-md hover:shadow-lg text-base font-medium text-white capitalize tracking-wider'>
                  Add a new item
                </button>
              </Link>
              <button
                className='text-red-400 bg-red-50 hover:text-red-500 hover:bg-red-100 rounded-lg w-full py-3 mt-3'
                onClick={() => dispatch({ type: ACTIONS.RESET })}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
