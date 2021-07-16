import { List } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { API_BASE_URL } from "../../constants/api";
import useGetData from "../../hooks/useGetData";
import { SimpleBackdrop } from "../Common";
import TodoListItem from "../TodoListItem";
import useStyles from "./styles";

function TodoList() {
  const classes = useStyles();
  const [checkeds, setCheckeds] = React.useState([]);
  const { data: todos, loading, error } = useGetData(`${API_BASE_URL}/todos`, 10);

  const handleCheck = id => {
    let newCheckeds = [...checkeds];
    if (newCheckeds.includes(id)) {
      newCheckeds = newCheckeds.filter(item => item !== id);
    } else {
      newCheckeds = [...newCheckeds, id];
    }
    setCheckeds(newCheckeds);
  };

  return (
    <div className={classes.root}>
      <h1>TodoList</h1>
      {loading && !error && <SimpleBackdrop />}
      {!loading && error && <Alert severity="error">{error}</Alert>}
      <List className={classes.list}>
        {(todos || []).map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            isChecked={checkeds.includes(todo.id)}
            handleCheck={handleCheck}
          />
        ))}
      </List>
    </div>
  );
}

export default TodoList;
