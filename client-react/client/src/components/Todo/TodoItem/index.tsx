import { useAppDispatch } from "../../../store/hooks";
import actions from "../../../store/slices/todo/actions";
import { ITodo } from "../../../types/todo";
import DeleteButton from "../ActionButtons/DeleteButton";

interface Todo {
  todo: ITodo;
}

function TodoItem({ todo }: Todo) {
  const dispatch = useAppDispatch();

  const toggleTodo = () => {
    dispatch(
      actions.updateTodo({
        ...todo,
        status: todo.status == "Done" ? "Not Done" : "Done",
      })
    ).then(() => {
      dispatch(actions.getTodos());
    });
  };

  const deleteTodo = () => {
    dispatch(actions.deleteTodo(todo.id)).then(() => {
      dispatch(actions.getTodos());
    });
  };

  return (
    <div className="row p-2 border-b-1">
      <div className="col-2-xs">
        <input
          checked={todo.status == "Done"}
          onClick={toggleTodo}
          type="checkbox"
        />
      </div>
      <div className="col-8-xs">
        <div
          className={`cursor-pointer hovered  text-flow-hidden  ${
            todo.status == "Done" ? "text-line-through" : ""
          }`}
          onClick={toggleTodo}
        >
          {todo.name}
        </div>
        <div className="font-sm mt-1 "> {todo.date}</div>
      </div>
      <div className="col-2-xs d-flex justify-flex-end gap-1">
        <DeleteButton onClick={deleteTodo}> Delete </DeleteButton>
      </div>
    </div>
  );
}

export default TodoItem;
