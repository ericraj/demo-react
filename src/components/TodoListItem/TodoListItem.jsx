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
import { changeTodoTitle } from "../../store/actions/form";
import { deleteTodoStart, setEditedTodo } from "../../store/actions/todo";
import useStyles from "./styles";

function TodoListItem({ todo, handleCheck }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickEdit = React.useCallback(() => {
    dispatch(changeTodoTitle(todo.title));
    dispatch(setEditedTodo(todo));
  }, [todo, dispatch]);

  const handleClickDelete = React.useCallback(() => {
    dispatch(deleteTodoStart(todo));
  }, [todo, dispatch]);

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
