import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { API_BASE_URL, INPUT_ID } from "../../constants";
import { deleteTodo, setEditedTodo, setError, setLoading } from "../../store/actions";
import useStyles from "./styles";

function TodoListItem({ todo, handleCheck }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickEdit = () => {
    const input = document.getElementById(INPUT_ID);
    if (input) {
      input.value = todo.title;
      dispatch(setEditedTodo(todo));
    }
  };

  const handleClickDelete = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    dispatch(setEditedTodo(null));

    const response = await fetch(`${API_BASE_URL}/todos/${todo.id}`, { method: "DELETE" });
    if (response.ok) {
      dispatch(setLoading(false));
      dispatch(deleteTodo(todo));
    } else {
      dispatch(setLoading(false));
      dispatch(setError(`Delete todo error with status code ${response.status}`));
    }
  };

  return (
    <ListItem key={todo.id} dense button onClick={() => handleCheck(todo)}>
      <ListItemIcon>
        <Checkbox edge="start" checked={todo.completed} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText
        id={todo.id}
        primary={todo.title}
        className={todo.completed ? classes.iscompleted : undefined}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" color="primary" onClick={handleClickEdit}>
          <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="edit" color="secondary" onClick={handleClickDelete}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  handleCheck: PropTypes.func.isRequired
};

export default TodoListItem;
