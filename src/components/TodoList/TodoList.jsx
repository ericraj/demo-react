import { List } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useDispatch } from "react-redux";
import { apiBaseUrl } from "../../constants";
import useGetTodos from "../../hooks/useGetTodos";
import { updateTodo } from "../../store/actions";
import { SimpleBackdrop } from "../Common";
import Form from "../Form";
import TodoListItem from "../TodoListItem";
import useStyles from "./styles";

function TodoList() {
  const classes = useStyles();
  const [checkeds, setCheckeds] = React.useState([]);
  const { todos, loading, error } = useGetTodos(`${apiBaseUrl}/todos`, 10);
  const dispatch = useDispatch();

  const handleCheck = todo => {
    let newCheckeds = [...checkeds];
    if (newCheckeds.includes(todo.id)) {
      newCheckeds = newCheckeds.filter(item => item !== todo.id);
      dispatch(updateTodo({ ...todo, completed: false }));
    } else {
      newCheckeds = [...newCheckeds, todo.id];
      dispatch(updateTodo({ ...todo, completed: true }));
    }
    setCheckeds(newCheckeds);
  };

  return (
    <div className={classes.root}>
      <h1>TodoList</h1>
      <Form />
      {loading && !error && <SimpleBackdrop />}
      {!loading && error && <Alert severity="error">{error}</Alert>}
      {todos.length > 0 && (
        <List className={classes.list}>
          {todos.map(todo => (
            <TodoListItem
              key={`${todo.id}-${todo.title.split(" ").join("-")}`}
              todo={todo}
              isChecked={checkeds.includes(todo.id) && todo.completed}
              handleCheck={handleCheck}
            />
          ))}
        </List>
      )}
    </div>
  );
}

export default TodoList;
