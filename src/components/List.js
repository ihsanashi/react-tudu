import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { HiOutlineTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function List() {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <div className='container'>
      <ul className='max-w-xl mx-auto'>
        {todos.map((item) => (
          <li
            key={item.id}
            className='flex flex-row items-center justify-between my-3 bg-gray-100 p-5 rounded-lg'
          >
            <div className='flex flex-row items-center justify-start'>
              <input
                className='rounded bg-gray-300 border-transparent focus:border-transparent focus:bg-gray-300 text-blue-700 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500'
                type='checkbox'
                value={item.completed}
                onChange={() => !item.completed}
              />
              <Link
                to={`/todo/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
                id={item.id}
                className='ml-4'
                htmlFor={item.title}
              >
                {item.title}
              </Link>
            </div>
            <button
              type='button'
              className='text-red-500'
              onClick={() => dispatch({ type: 'REMOVE_TODO', id: item.id })}
            >
              <HiOutlineTrash size='20' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
