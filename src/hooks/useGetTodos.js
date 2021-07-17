import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo, setEditedTodo, setError, setLoading } from "../store/actions";
import { todoSelector, errorSelector, loadingSelector } from "../store/selectors";

const useGetTodos = (url, limit) => {
  const todos = useSelector(todoSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    dispatch(setEditedTodo(null));

    const response = await fetch(url);
    let res = await response.json();
    if (res.length && limit) {
      res = res.slice(0, limit);
    }
    if (response.ok) {
      dispatch(setLoading(false));
      dispatch(getAllTodo(res));
    } else {
      dispatch(setLoading(false));
      dispatch(setError(`Get todos error with status code ${response.status}`));
    }
  }, []);

  return { todos, loading, error };
};

export default useGetTodos;
