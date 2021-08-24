import { useQuery } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';
import { BiLoaderAlt } from 'react-icons/bi';
import { TodoItem } from '.';

const audience = process.env.REACT_APP_JWT_AUDIENCE;
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_API_ENDPOINT
    : 'http://localhost:8080';

function TodoList() {
  const { getAccessTokenSilently } = useAuth0();

  const { isLoading, isError, error, data } = useQuery('todos', async () => {
    const token = await getAccessTokenSilently({
      audience: audience,
      scope: 'manage:todos',
    });
    const response = await fetch(`${baseUrl}/api/v1/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  });

  if (isLoading)
    return (
      <div className='py-8'>
        <BiLoaderAlt
          size={24}
          className='mx-auto text-indigo-500 animate-spin'
        />
      </div>
    );

  if (isError) return `An error has occured: ${error.message}`;

  console.log(data);

  return (
    <div className='max-w-xl pt-8 pb-12 mx-auto'>
      {data.length === 0 ? (
        <p className='italic text-gray-600'>No todos found.</p>
      ) : (
        <>
          <div className='flex items-center justify-between'>
            <h6 className='text-base font-medium text-gray-600'>Your list</h6>
            <p className='text-sm font-light text-gray-500'>
              {data.length} item{data.length > 1 && 's'}
            </p>
          </div>
          <ul className='pt-5'>
            {data.map((item) => (
              <TodoItem item={item} key={item._id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default TodoList;
