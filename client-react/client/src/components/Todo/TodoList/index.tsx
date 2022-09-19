import useGetTodos from "../../../hooks/useGetTodos";
import Spinner from "../../common/Spinner";
import Error from "../../common/Error";
import TodoItem from "../TodoItem";
import NoData from "../../common/NoData";
import { ITodo } from "../../../types/todo";

function TodoList() {
  const { todos } = useGetTodos();

  const Todos = () => {
    return (
      <>
        {todos.todos.map((todo: ITodo) => (
          <TodoItem todo={todo} />
        ))}
      </>
    );
  };
console.log(todos.status)
  if (todos.status == "loading") return <Spinner />;
  if (todos.status == "failed") return <Error />;
  return (
    <div className="card  fadeIn min-h-100 mt-2">
      {todos.todos.length ? <Todos /> : <NoData />}
    </div>
  );
}

export default TodoList;
