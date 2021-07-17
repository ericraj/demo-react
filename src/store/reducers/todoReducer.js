import { GET_ALL_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actions";

const reducer = (todos = [], action) => {
  switch (action.type) {
    case GET_ALL_TODO:
      return [...action.payload];
    case ADD_TODO:
      return [action.payload, ...todos];
    case UPDATE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        }
        return todo;
      });
    case DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

export default reducer;
