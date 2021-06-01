import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Link } from 'react-router-dom';
import { ACTIONS } from '../reducers/TodoReducer';

function List() {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <div className='max-w-xl mx-auto'>
      <div className='mb-5'>
        <input
          className='mt-0 block text-sm md:text-base mx-auto w-1/2 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
          type='text'
          placeholder='Search'
          onChange={(e) =>
            dispatch({
              type: ACTIONS.FILTER,
              payload: {
                title: e.target.value,
              },
            })
          }
        />
      </div>
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            className='flex flex-row items-start justify-between my-3 bg-gray-100 p-5 rounded-lg'
          >
            <div className='flex flex-row items-start justify-start'>
              <input
                className='rounded bg-gray-300 border-transparent focus:border-transparent focus:bg-gray-300 text-blue-700 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500'
                type='checkbox'
                defaultChecked={item.complete}
                onClick={() =>
                  dispatch({
                    type: ACTIONS.TOGGLE,
                    payload: {
                      id: item.id,
                    },
                  })
                }
              />
              <p className='text-gray-800 text-base text-left ml-4'>
                {item.title}
              </p>
            </div>
            <div className='flex flex-row items-center'>
              <Link
                to={`/todo/${item.id}`}
                id={item.id}
                className='mr-3 text-sm text-blue-500 font-medium'
                htmlFor={item.title}
              >
                View
              </Link>
              <button
                type='button'
                className='text-red-500 text-sm font-medium'
                onClick={() =>
                  dispatch({
                    type: ACTIONS.REMOVE,
                    payload: {
                      id: item.id,
                    },
                  })
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex flex-col items-center justify-center my-5'>
        <Link to='/new' className='w-full flex items-center justify-center'>
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
    </div>
  );
}

export default List;
