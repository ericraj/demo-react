import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { formReducer, todoReducer } from "./reducers";
import sagas from "./sagas";

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  combineReducers({
    form: formReducer,
    todo: todoReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;
