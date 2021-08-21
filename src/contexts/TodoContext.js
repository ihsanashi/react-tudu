import { createContext, useReducer, useEffect } from 'react';
import { TodoReducer } from '../reducers/TodoReducer';
import { useAuth0 } from '@auth0/auth0-react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  const audience = process.env.REACT_APP_JWT_AUDIENCE;
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_BASE_API_ENDPOINT
      : 'http://localhost:8080';

  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

    const getAuth0Data = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: audience,
          scope: 'manage:todos',
        });

        console.log('token', token);
        console.log('user', user);

        const response = await fetch(`${baseUrl}/api/v1/todos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAuth0Data();
  }, [todos, audience, baseUrl, user, getAccessTokenSilently]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
