// Get all todo
export const GET_ALL_TODO_START = "TODO/GET_ALL_TODO_START";
export const GET_ALL_TODO_SUCCESS = "TODO/GET_ALL_TODO_SUCCESS";
export const GET_ALL_TODO_ERROR = "TODO/GET_ALL_TODO_ERROR";

// Add todo
export const ADD_TODO_START = "TODO/ADD_TODO_START";
export const ADD_TODO_SUCCESS = "TODO/ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "TODO/ADD_TODO_ERROR";

// Update todo
export const UPDATE_TODO_START = "TODO/UPDATE_TODO_START";
export const UPDATE_TODO_SUCCESS = "TODO/UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_ERROR = "TODO/UPDATE_TODO_ERROR";

// Delete
export const DELETE_TODO_START = "TODO/DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "TODO/DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "TODO/DELETE_TODO_ERROR";

export const SET_EDITED_TODO = "TODO/SET_EDITED_TOD";

export const getAllTodoStart = () => ({ type: GET_ALL_TODO_START });
export const getAllTodoSuccess = todos => ({ type: GET_ALL_TODO_SUCCESS, payload: todos });
export const getAllTodoError = err => ({ type: GET_ALL_TODO_ERROR, payload: err });

export const addTodoStart = () => ({ type: ADD_TODO_START });
export const addTodoSuccess = newTodo => ({ type: ADD_TODO_SUCCESS, payload: newTodo });
export const addTodoError = err => ({ type: ADD_TODO_ERROR, payload: err });

export const updateTodoStart = (updatedTodo, updateStatus = false) => ({
  type: UPDATE_TODO_START,
  payload: { updatedTodo, updateStatus }
});
export const updateTodoSuccess = updatedTodo => ({
  type: UPDATE_TODO_SUCCESS,
  payload: updatedTodo
});
export const updateTodoError = err => ({ type: UPDATE_TODO_ERROR, payload: err });

export const deleteTodoStart = deletedTodo => ({ type: DELETE_TODO_START, payload: deletedTodo });
export const deleteTodoSuccess = deletedTodo => ({
  type: DELETE_TODO_SUCCESS,
  payload: deletedTodo
});
export const deleteTodoError = err => ({ type: DELETE_TODO_ERROR, payload: err });

export const setEditedTodo = editedTodo => ({ type: SET_EDITED_TODO, payload: editedTodo });
