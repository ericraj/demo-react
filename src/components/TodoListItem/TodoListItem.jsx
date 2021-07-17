import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { inputId } from "../../constants";
import { setEditedTodo } from "../../store/actions";

function TodoListItem({ todo, isChecked, handleCheck }) {
  const dispatch = useDispatch();

  const handleClickEdit = () => {
    const input = document.getElementById(inputId);
    if (input) {
      input.value = todo.title;
      dispatch(setEditedTodo(todo));
    }
  };

  return (
    <ListItem key={todo.id} dense button onClick={() => handleCheck(todo)}>
      <ListItemIcon>
        <Checkbox edge="start" checked={isChecked} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText id={todo.id} primary={todo.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" color="primary" onClick={handleClickEdit}>
          <Edit />
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
  isChecked: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired
};

export default TodoListItem;
