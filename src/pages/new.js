import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import Wrapper from '../components/Wrapper';
import Banner from '../components/Banner';
import { TodoContext } from '../contexts/TodoContext';
import BackHeader from '../components/BackHeader';
import { ACTIONS } from '../reducers/TodoReducer';
import Header from '../components/Header';

function AddNew() {
  const { dispatch } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const clearData = () => {
    setTitle('');
    setDescription('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    dispatch({
      type: ACTIONS.ADD,
      payload: {
        title: title.toLowerCase(),
        description,
        complete: false,
      },
    });

    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      setLoading(false);
      clearData();
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <meta name='description' content='Add a new to-do item' />
        <title>Tudu - Add new to-do item</title>
      </Helmet>
      <Header />
      <BackHeader link='/' />
      <Wrapper className='p-4'>
        <div className='container'>
          <div className='max-w-xl mx-auto'>
            <h3 className='text-2xl font-semibold text-gray-900 mb-7 md:mb-10'>
              Add new
            </h3>
            <form onSubmit={handleSubmit}>
              <label className='block mb-8' htmlFor='title'>
                <span className='text-gray-700'>Title</span>
                <input
                  className='block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
                  type='text'
                  name='title'
                  required
                  placeholder='Buy groceries'
                  disabled={loading}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label className='block my-8' htmlFor='description'>
                <div className='flex flex-row items-center justify-between'>
                  <span className='text-gray-700'>Description</span>
                  <em className='text-sm text-gray-700'>Optional</em>
                </div>
                <textarea
                  className='block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
                  name='description'
                  rows='3'
                  placeholder="Don't forget the ice cream!"
                  disabled={loading}
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
                      : 'bg-green-500 hover:bg-green-600 text-white transition duration-300 ease-in-out'
                  } font-semibold tracking-wider py-3 px-8 rounded-lg w-full`}
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Add'}
                </button>
              </div>
            </form>
          </div>
          {submitted && (
            <Banner
              text='A new to-do has been added to your list. Add more, or go back to
              the '
              link='/'
              linkTitle='homepage'
            />
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default AddNew;
