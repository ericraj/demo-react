import { useEffect, useState } from "react";

const useGetData = (url, limit) => {
  const [state, setState] = useState({ data: null, loading: false, error: null });
  const { data, loading, error } = state;

  useEffect(async () => {
    setState(prev => ({ ...prev, loading: true }));
    const response = await fetch(url);
    let res = await response.json();
    if (res.length && limit) {
      res = res.slice(0, limit);
    }
    if (response.ok) {
      setState(prev => ({ ...prev, loading: false, data: res }));
    } else {
      setState(prev => ({
        ...prev,
        loading: false,
        error: `Get data error with status code ${response.status}`
      }));
    }
  }, []);

  return { data, loading, error };
};

export default useGetData;
