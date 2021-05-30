import { createContext, useReducer, useEffect } from 'react';
import { TodoReducer } from '../reducers/TodoReducer';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(TodoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
