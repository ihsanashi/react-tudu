import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineCheck } from 'react-icons/hi';

function TodoItem({ item }) {
  return (
    <li className='flex flex-row items-start justify-between py-2.5'>
      <div className='flex flex-col items-start justify-start gap-x-5'>
        <Link to={`/todo/${item._id}`} id={item.id} htmlFor={item.title}>
          {item.isCompleted && (
            <HiOutlineCheck className='inline mr-1.5 text-gray-600' size={14} />
          )}
          <h6
            className={`${
              item.isCompleted ? 'text-gray-600' : 'text-indigo-600'
            } hover:text-indigo-400 inline transition duration-300 ease-in-out text-base md:text-lg font-medium`}
          >
            {item.title}
          </h6>

          <p
            className={`text-sm text-gray-500 font-light ${
              item.description ? 'not-italic' : 'italic'
            }`}
          >
            {item.description ? item.description : 'No description'}
          </p>
        </Link>
      </div>
      <div className='flex flex-row items-center gap-x-4'>
        <button
          type='button'
          className='transition duration-300 ease-in-out'
          onClick={() => {
            console.log('Delete');
          }}
        >
          <HiOutlineTrash
            className='text-gray-600 transition duration-300 ease-in-out rounded-full hover:text-red-500'
            size={20}
          />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
