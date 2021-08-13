import { API_BASE_URL } from "../constants";

const apiUrl = `${API_BASE_URL}/todos`;
const headers = {
  "Content-type": "application/json; charset=UTF-8"
};

export const getTodos = () => fetch(apiUrl).then(res => res.json().then(data => data));

export const addTodo = payload =>
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(payload),
    headers
  }).then(res => res.json().then(data => data));

export const updateTodo = payload =>
  fetch(`${apiUrl}/${payload.id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers
  }).then(res => res.json().then(data => data));

export const deleteTodo = payload =>
  fetch(`${apiUrl}/${payload.id}`, {
    method: "DELETE"
  }).then(res => res.json().then(data => data));
