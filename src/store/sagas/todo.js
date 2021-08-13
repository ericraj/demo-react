import { call, put, select, takeLatest } from "redux-saga/effects";
import * as api from "../../utils/api";
import { changeTodoTitle } from "../actions/form";
import {
  addTodoSuccess,
  ADD_TODO_START,
  deleteTodoSuccess,
  DELETE_TODO_START,
  getAllTodoError,
  getAllTodoSuccess,
  GET_ALL_TODO_START,
  updateTodoSuccess,
  UPDATE_TODO_START
} from "../actions/todo";
import { formSelector } from "../selectors";

function* getAllTodo() {
  try {
    let data = yield call(api.getTodos);
    if (data && data.length) {
      data = data.slice(0, 10);
    }
    yield put(getAllTodoSuccess(data));
  } catch (err) {
    yield put(getAllTodoError("Get todos error"));
  }
}

function* addTodo() {
  try {
    const { todoTitle } = yield select(formSelector);
    const payload = { title: todoTitle, completed: false, userId: 1 };
    const data = yield call(api.addTodo, payload);
    yield put(addTodoSuccess(data));
    yield put(changeTodoTitle(""));
  } catch (err) {
    yield put(getAllTodoError("Add todo error"));
  }
}

function* updateTodo(action) {
  try {
    const { updatedTodo, updateStatus } = action.payload;
    const { todoTitle } = yield select(formSelector);
    const payload = {
      ...updatedTodo,
      title: updateStatus ? updateTodo.title : todoTitle,
      completed: updateStatus ? !updatedTodo.completed : updatedTodo.completed
    };
    const data = yield call(api.updateTodo, payload);
    yield put(updateTodoSuccess(data));
    yield put(changeTodoTitle(""));
  } catch (err) {
    yield put(getAllTodoError("Update todo error"));
  }
}

function* deleteTodo(action) {
  try {
    // Just call server
    yield call(api.deleteTodo, action.payload);
    // const data = yield call(api.deleteTodo, action.payload);
    yield put(deleteTodoSuccess(action.payload));
  } catch (err) {
    yield put(getAllTodoError("Delete todo error"));
  }
}

export default [
  takeLatest(GET_ALL_TODO_START, getAllTodo),
  takeLatest(ADD_TODO_START, addTodo),
  takeLatest(UPDATE_TODO_START, updateTodo),
  takeLatest(DELETE_TODO_START, deleteTodo)
];
