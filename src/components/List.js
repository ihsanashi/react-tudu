import { useContext, useEffect } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { Link } from 'react-router-dom';

function List() {
  const { todos, dispatch } = useContext(TodoContext);

  useEffect(() => {}, [todos]);

  return (
    <ul className='max-w-xl mx-auto'>
      {todos.map((item) => (
        <li
          key={item.id}
          className='flex flex-row items-start justify-between my-3 bg-gray-100 p-5 rounded-lg'
        >
          <div className='flex flex-row items-start justify-start'>
            <input
              className='rounded bg-gray-300 border-transparent focus:border-transparent focus:bg-gray-300 text-blue-700 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500'
              type='checkbox'
              value={item.completed}
              onChange={() => !item.completed}
            />
            <p className='text-gray-800 text-base text-left ml-4'>
              {item.title}
            </p>
          </div>
          <div className='flex flex-row items-center'>
            <Link
              to={`/todo/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
              id={item.id}
              className='mr-3 text-sm text-blue-500 font-medium'
              htmlFor={item.title}
            >
              View
            </Link>
            <button
              type='button'
              className='text-red-500 text-sm font-medium'
              onClick={() => dispatch({ type: 'REMOVE_TODO', id: item.id })}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
