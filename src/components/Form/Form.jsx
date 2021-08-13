import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodoTitle } from "../../store/actions/form";
import { addTodoStart, updateTodoStart } from "../../store/actions/todo";
import { formSelector, todoSelector } from "../../store/selectors";
import useStyles from "./styles";

function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { editedTodo } = useSelector(todoSelector);
  const { todoTitle } = useSelector(formSelector);

  const handleChangeTodoTitle = React.useCallback(
    event => {
      dispatch(changeTodoTitle(event.target.value));
    },
    [dispatch]
  );

  const saveTodo = React.useCallback(
    event => {
      event.preventDefault();
      if (todoTitle) {
        if (editedTodo) {
          dispatch(updateTodoStart(editedTodo));
        } else {
          dispatch(addTodoStart());
        }
      }
    },
    [todoTitle, editedTodo, dispatch]
  );

  return (
    <form className={classes.root}>
      <TextField
        placeholder="Add todo"
        fullWidth
        margin="none"
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
        value={todoTitle}
        onChange={handleChangeTodoTitle}
      />
      <Button
        type="submit"
        aria-label="add"
        color="primary"
        size="medium"
        variant="outlined"
        onClick={saveTodo}>
        Save
      </Button>
    </form>
  );
}

export default Form;
