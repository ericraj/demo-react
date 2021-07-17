export const GET_ALL_TODO = "GET_ALL_TODO";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// Edited todo
export const SET_EDITED_TODO = "SET_EDITED_TODO";

// Loading
export const SET_LOADING = "SET_LOADING";

// Error
export const SET_ERROR = "SET_ERROR";

export const getAllTodo = todos => ({ type: GET_ALL_TODO, payload: todos });
export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
export const updateTodo = todo => ({ type: UPDATE_TODO, payload: todo });
export const deleteTodo = todo => ({ type: DELETE_TODO, payload: todo });

export const setLoading = loading => ({ type: SET_LOADING, payload: loading });

export const setError = error => ({ type: SET_ERROR, payload: error });

export const setEditedTodo = editedTodo => ({ type: SET_EDITED_TODO, payload: editedTodo });
