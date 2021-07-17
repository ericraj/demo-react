import { SET_EDITED_TODO } from "../actions";

const editedTodoReducer = (state = null, action) => {
  switch (action.type) {
    case SET_EDITED_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default editedTodoReducer;
