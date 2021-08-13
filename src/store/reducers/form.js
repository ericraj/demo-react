import { CHANGE_TODO_TITLE } from "../actions/form";

const initialState = {
  todoTitle: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TODO_TITLE:
      return { ...state, todoTitle: action.payload };

    default:
      return state;
  }
};

export default reducer;
