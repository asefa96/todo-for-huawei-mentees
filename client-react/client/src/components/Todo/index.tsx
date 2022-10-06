import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoContainer() {
  console.log(process.env)

  return (
    <div className="container  box-border max-w-500">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoContainer;
