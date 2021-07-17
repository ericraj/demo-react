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

function TodoListItem({ todo, isChecked, handleCheck }) {
  return (
    <ListItem key={todo.id} dense button onClick={() => handleCheck(todo)}>
      <ListItemIcon>
        <Checkbox edge="start" checked={isChecked} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText id={todo.id} primary={todo.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" color="primary">
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
