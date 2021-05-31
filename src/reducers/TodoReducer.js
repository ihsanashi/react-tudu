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
    case 'SAVE_TODO': {
      // const item = state.find((item) => item.id === action.id);
      return [
        ...state,
        {
          title: action.item.title,
          description: action.item.description,
          id: action.item.id,
          completed: action.item.completed,
        },
      ];
    }
    // case 'MARK_COMPLETED':
    //   return
    case 'REMOVE_TODO':
      return state.filter((item) => item.id !== action.id);
    case 'RESET':
      return (state = []);
    default:
      return state;
  }
};
