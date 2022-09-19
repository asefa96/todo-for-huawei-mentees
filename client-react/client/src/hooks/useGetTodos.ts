import { TodoState } from './../types/todo';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import actions from "../store/slices/todo/actions";

const useGetTodos = () => {
  const todos:TodoState = useAppSelector((store) => store.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getTodos());
  }, []);

  return { todos };
};

export default useGetTodos;
