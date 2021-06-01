import { v4 as uuidv4 } from 'uuid';

export const ACTIONS = {
  ADD: 'add',
  SAVE: 'save',
  TOGGLE: 'toggle',
  REMOVE: 'remove',
  RESET: 'reset',
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...state,
        {
          title: action.payload.title,
          description: action.payload.description,
          id: uuidv4(),
          complete: false,
        },
      ];
    case ACTIONS.SAVE: {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
            description: action.payload.description,
            id: action.payload.id,
            complete: action.payload.complete,
          };
        }
        return item;
      });
    }
    case ACTIONS.TOGGLE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      });
    case ACTIONS.REMOVE:
      return state.filter((item) => item.id !== action.payload.id);
    case ACTIONS.RESET:
      return (state = []);
    default:
      return state;
  }
};
