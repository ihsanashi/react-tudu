import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Link } from 'react-router-dom';
import { ACTIONS } from '../reducers/TodoReducer';
import { HiOutlineTrash } from 'react-icons/hi';

function List() {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <div className='max-w-xl mx-auto'>
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            className='flex flex-row items-start justify-between p-5 my-3 bg-gray-100 rounded-lg'
          >
            <div className='flex flex-row items-start justify-start gap-x-5'>
              <input
                className='text-indigo-700 bg-gray-300 border-transparent rounded focus:border-transparent focus:bg-gray-300 focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500'
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
              <Link
                to={`/todo/${item.id}`}
                id={item.id}
                className='text-sm font-medium text-indigo-500 transition duration-300 ease-in-out md:text-base hover:text-indigo-700'
                htmlFor={item.title}
              >
                <p className='text-left'>{item.title}</p>
              </Link>
            </div>
            <div className='flex flex-row items-center gap-x-4'>
              <button
                type='button'
                className='transition duration-300 ease-in-out'
                onClick={() =>
                  dispatch({
                    type: ACTIONS.REMOVE,
                    payload: {
                      id: item.id,
                    },
                  })
                }
              >
                <HiOutlineTrash
                  className='text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500'
                  size={20}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex flex-row items-center justify-between my-5 gap-x-5'>
        <Link to='/new' className='flex items-center justify-center w-full'>
          <button className='w-full px-8 py-3 text-base font-semibold tracking-wider text-white capitalize transition duration-300 ease-in-out bg-green-500 rounded-lg shadow hover:bg-green-600 hover:shadow-md'>
            Add
          </button>
        </Link>
        <button
          className='w-full py-3 font-medium text-red-400 transition duration-300 ease-in-out rounded-lg bg-red-50 hover:text-red-700 hover:bg-red-100'
          onClick={() => dispatch({ type: ACTIONS.RESET })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default List;
