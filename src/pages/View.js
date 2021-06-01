import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, useHistory } from 'react-router-dom';
import { HiOutlineTrash } from 'react-icons/hi';
import { TodoContext } from '../contexts/TodoContext';
import Wrapper from '../components/Wrapper';
import Banner from '../components/Banner';
import NoMatch from './NoMatch';
import Header from '../components/Header';
import { ACTIONS } from '../reducers/TodoReducer';
import BackHeader from '../components/BackHeader';

function ViewTodo(props) {
  // Determine if the current URL matches with a todo item title from the todos array
  const { todos, dispatch } = useContext(TodoContext);
  const itemId = props.match.params.id;
  const item = todos.find((item) => item.id === itemId);

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // initialise input states with existing values
  const [title, setTitle] = useState(item && item.title);
  const [description, setDescription] = useState(item && item.description);

  const history = useHistory();

  const redirectToHome = () => {
    const path = '/';
    history.push(path);
  };

  const deleteItem = () => {
    dispatch({
      type: ACTIONS.REMOVE,
      payload: {
        id: item.id,
      },
    });
    redirectToHome();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    dispatch({
      type: ACTIONS.SAVE,
      payload: {
        title: title.toLowerCase(),
        description,
        id: item.id,
        complete: item.complete,
      },
    });

    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      setLoading(false);
    }, 3000);
  };

  if (item) {
    return (
      <>
        <Helmet>
          <meta name='description' content='View to-do item' />
          <title>
            Tudu -{' '}
            {item.title.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
              match.toUpperCase()
            )}
          </title>
        </Helmet>
        <Header />
        <BackHeader link='/' />
        <Wrapper className='p-4'>
          <div className='container'>
            <div className='max-w-xl mx-auto'>
              <form onSubmit={handleSubmit}>
                <label className='block mb-8' htmlFor='title'>
                  <span className='text-gray-700'>Title</span>
                  <input
                    className='mt-1 w-full block rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
                    type='text'
                    name='title'
                    required
                    disabled={loading}
                    placeholder={title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label className='block my-8' htmlFor='description'>
                  <div className='flex flex-row items-center justify-between'>
                    <span className='text-gray-700'>Description</span>
                    <em className='text-gray-700 text-sm'>Optional</em>
                  </div>
                  <textarea
                    className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
                    name='description'
                    rows='3'
                    disabled={loading}
                    placeholder={description}
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </label>
                <div className='mt-8'>
                  <button
                    className={`${
                      loading
                        ? 'bg-gray-200 cursor-not-allowed'
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    } font-medium text-base tracking-wider py-3 px-8 rounded-lg w-full`}
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                  <button
                    type='button'
                    disabled={loading}
                    className={`${
                      loading
                        ? 'bg-gray-200 text-gray-800 cursor-not-allowed'
                        : 'text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100'
                    }  flex flex-row justify-center items-center py-2 px-3 mt-3 rounded-lg w-full`}
                    onClick={deleteItem}
                  >
                    <HiOutlineTrash size='20' title='Delete this to-do item' />
                    <p className='ml-2 text-base'>Delete</p>
                  </button>
                </div>
              </form>
              {submitted && (
                <Banner
                  text='This to-do has been updated. Return to the '
                  link='/'
                  linkTitle='homepage'
                />
              )}
            </div>
          </div>
        </Wrapper>
      </>
    );
  } else {
    return <Route component={NoMatch} />;
  }
}

export default ViewTodo;
