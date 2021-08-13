import { Button, TextField } from "@material-ui/core";
import React, { createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INPUT_ID } from "../../constants";
import { addTodo, setEditedTodo, setError, setLoading, updateTodo } from "../../store/actions";
import { editedTodoSelector } from "../../store/selectors";
import { saveTodoToServer } from "../../utils";
import useStyles from "./styles";

function Form() {
  const classes = useStyles();
  const inputRef = createRef();
  const dispatch = useDispatch();

  const editedTodo = useSelector(editedTodoSelector);

  const saveTodo = event => {
    event.preventDefault();
    if (inputRef.current.value) {
      dispatch(setLoading(true));
      dispatch(setError(null));

      let payload = { completed: false, title: inputRef.current.value, userId: 1 };
      if (editedTodo) {
        payload = { ...editedTodo, title: inputRef.current.value };
      }

      saveTodoToServer(payload).then(response => {
        if (response.ok) {
          // Empty input
          const input = document.getElementById(INPUT_ID);
          if (input) input.value = "";
          dispatch(setEditedTodo(null));

          response.json().then(data => {
            dispatch(setLoading(false));
            if (editedTodo) {
              dispatch(updateTodo(data));
            } else {
              dispatch(addTodo(data));
            }
          });
        } else {
          dispatch(setLoading(false));
          dispatch(setError(`Add todo error with status code ${response.status}`));
        }
      });
    }
  };

  return (
    <form className={classes.root}>
      <TextField
        id={INPUT_ID}
        placeholder="Add todo"
        fullWidth
        margin="none"
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
        inputRef={inputRef}
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
