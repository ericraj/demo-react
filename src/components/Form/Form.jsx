import { Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { createRef } from "react";
import { useDispatch } from "react-redux";
import { apiBaseUrl, inputId } from "../../constants";
import { addTodo as addTodoAction, setError, setLoading } from "../../store/actions";
import useStyles from "./styles";

function Form() {
  const classes = useStyles();
  const inputRef = createRef();
  const dispatch = useDispatch();

  const addTodo = event => {
    event.preventDefault();
    if (inputRef.current.value) {
      dispatch(setLoading(true));
      dispatch(setError(null));

      fetch(`${apiBaseUrl}/todos`, {
        method: "POST",
        body: JSON.stringify({
          completed: false,
          title: inputRef.current.value,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => {
        if (response.ok) {
          // Empty input
          const input = document.getElementById(inputId);
          if (input) input.value = "";

          response.json().then(data => {
            dispatch(addTodoAction(data));
            dispatch(setLoading(false));
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
        id={inputId}
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
        startIcon={<Add />}
        onClick={addTodo}>
        Add
      </Button>
    </form>
  );
}

export default Form;
