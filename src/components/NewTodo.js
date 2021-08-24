import { useForm } from 'react-hook-form';
import { useAuth0 } from '@auth0/auth0-react';
import { useQueryClient } from 'react-query';

const audience = process.env.REACT_APP_JWT_AUDIENCE;
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_API_ENDPOINT
    : 'http://localhost:8080';

function NewTodo() {
  const { register, handleSubmit } = useForm();
  const { getAccessTokenSilently } = useAuth0();

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const postNewData = async (data) => {
    console.log(data);

    const token = await getAccessTokenSilently({
      audience: audience,
      scope: 'manage:todos',
    });

    const response = await fetch(`${baseUrl}/api/v1/todos`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    console.log(jsonData);

    queryClient.invalidateQueries('todos');
  };

  return (
    <div className='max-w-xl mx-auto border border-gray-200 rounded-md bg-gray-50'>
      <form onSubmit={handleSubmit(postNewData)}>
        <div className='flex items-center justify-between p-2'>
          <div className='flex flex-col'>
            <div className='flex items-center py-1.5 flex-1'>
              <label
                htmlFor='title'
                className='w-20 text-sm text-right text-gray-700'
              >
                Title
              </label>
              <input
                type='text'
                {...register('title', { required: true })}
                placeholder='Eg. Buy groceries'
                className='flex-1 p-0 pl-2.5 text-base text-gray-900 bg-transparent border-transparent rounded-md focus:border-transparent focus:bg-transparent focus:ring-0'
              />
            </div>
            <div className='flex items-center py-1.5 flex-1'>
              <label
                htmlFor='description'
                className='w-20 text-sm text-right text-gray-700'
              >
                Description
              </label>
              <input
                type='text'
                {...register('description')}
                placeholder='Eg. Get ice cream'
                className='flex-1 p-0 pl-2.5 text-base text-gray-900 bg-transparent border-transparent rounded-md focus:border-transparent focus:bg-transparent focus:ring-0'
              />
            </div>
          </div>
          <button className='px-5 py-2.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 transition duration-300 ease-in-out rounded-md'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTodo;
