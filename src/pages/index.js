import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import FooterButton from '../components/FooterButton';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { TodoContext } from '../contexts/TodoContext';
import { useContext } from 'react';
import Wrapper from '../components/Wrapper';
import { Link } from 'react-router-dom';
import List from '../components/List';

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
      <Wrapper className='p-4 my-8 text-center'>
        {todos.length === 0 ? (
          <div className='container'>
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
          </div>
        ) : (
          <List />
        )}
      </Wrapper>
      <FooterButton
        title='Add a new item'
        link='/new'
        icon={
          <HiOutlinePlusSm
            color='white'
            size='20'
            className='animate-bounce transform group-hover:scale-105'
          />
        }
      />
    </>
  );
}

export default Home;
