import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { editedTodoReducer, errorReducer, loadingeducer, todoReducer } from "./reducers";

const composeEnhancers = composeWithDevTools({});

const middleware = [thunk];

const store = createStore(
  combineReducers({
    error: errorReducer,
    loading: loadingeducer,
    todos: todoReducer,
    editedTodo: editedTodoReducer
  }),
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
