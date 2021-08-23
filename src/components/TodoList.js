import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTrash, HiOutlineCheck } from 'react-icons/hi';
import { useAuth0 } from '@auth0/auth0-react';

const audience = process.env.REACT_APP_JWT_AUDIENCE;
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_API_ENDPOINT
    : 'http://localhost:8080';

function TodoList() {
  const { getAccessTokenSilently } = useAuth0();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: audience,
          scope: 'manage:todos',
        });

        const response = await fetch(`${baseUrl}/api/v1/todos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setTodos(await response.json());
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, [getAccessTokenSilently]);

  console.table(todos);

  return (
    <div className='max-w-xl pt-8 pb-12 mx-auto'>
      {todos.length === 0 ? (
        <p className='italic text-gray-600'>No todos found.</p>
      ) : (
        <div>
          <div className='flex items-center justify-between'>
            <h6 className='text-base font-medium text-gray-600'>Your list</h6>
            <p className='text-sm font-light text-gray-500'>
              {todos.length} item{todos.length > 1 && 's'}
            </p>
          </div>
          <ul className='pt-5'>
            {todos.map((item) => (
              <li
                key={item._id}
                className='flex flex-row items-start justify-between py-2.5'
              >
                <div className='flex flex-col items-start justify-start gap-x-5'>
                  <Link
                    to={`/todo/${item._id}`}
                    id={item.id}
                    htmlFor={item.title}
                  >
                    {item.isCompleted && (
                      <HiOutlineCheck
                        className='inline mr-1.5 text-gray-600'
                        size={14}
                      />
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
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;
