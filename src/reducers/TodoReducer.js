import { v4 as uuidv4 } from 'uuid';

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          title: action.item.title,
          description: action.item.description,
          id: uuidv4(),
          completed: action.item.completed,
        },
      ];
    case 'REMOVE_TODO':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
