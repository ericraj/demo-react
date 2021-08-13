import { List } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodoStart, updateTodoStart } from "../../store/actions/todo";
import { todoSelector } from "../../store/selectors";
import { SimpleBackdrop } from "../Common";
import Form from "../Form";
import TodoListItem from "../TodoListItem";
import useStyles from "./styles";

function TodoList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector(todoSelector);

  const handleCheck = React.useCallback(
    todo => {
      dispatch(updateTodoStart(todo, true));
    },
    [dispatch]
  );

  // Get todos
  React.useEffect(() => {
    dispatch(getAllTodoStart());
  }, []);

  return (
    <div className={classes.root}>
      <h1>TodoList</h1>
      {loading && <SimpleBackdrop />}
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Form />
      {todos && todos.length > 0 && (
        <List className={classes.list}>
          {todos.map(todo => (
            <TodoListItem
              key={`${todo.id}-${todo.title.split(" ").join("-")}`}
              todo={todo}
              handleCheck={handleCheck}
            />
          ))}
        </List>
      )}
    </div>
  );
}

export default TodoList;
