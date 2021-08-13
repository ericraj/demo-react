import {
  ADD_TODO_ERROR,
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  DELETE_TODO_START,
  DELETE_TODO_SUCCESS,
  GET_ALL_TODO_ERROR,
  GET_ALL_TODO_START,
  GET_ALL_TODO_SUCCESS,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_START,
  DELETE_TODO_ERROR,
  UPDATE_TODO_SUCCESS,
  SET_EDITED_TODO
} from "../actions/todo";

const initialState = {
  loading: false,
  error: null,
  editedTodo: null,
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Start
    case GET_ALL_TODO_START:
      return { ...state, loading: true, error: null, editedTodo: null };

    case ADD_TODO_START:
    case DELETE_TODO_START:
    case UPDATE_TODO_START:
      return { ...state, loading: true, error: null };

    // Success
    case GET_ALL_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case ADD_TODO_SUCCESS:
      return { ...state, loading: false, error: null, todos: [action.payload, ...state.todos] };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        editedTodo: null,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, ...action.payload };
          }
          return todo;
        })
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };

    // Error
    case GET_ALL_TODO_ERROR:
    case ADD_TODO_ERROR:
    case UPDATE_TODO_ERROR:
    case DELETE_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };

    case SET_EDITED_TODO:
      return { ...state, editedTodo: action.payload };

    default:
      return state;
  }
};

export default reducer;
