import { MutableRefObject, useRef, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import actions from "../../../store/slices/todo/actions";
import Input from "../../common/Input";
import AddButton from "../ActionButtons/AddButton";

function TodoInput() {

  const dispatch = useAppDispatch();
  
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [validateInput, setValidateInput] = useState(false);

  const addTodo = () => {
    if (inputRef.current?.value.trim() != "") {
      setValidateInput(false);
      dispatch(actions.addTodo(inputRef.current?.value));
      clear();
    } else {
      setValidateInput(true);
    }
  };

  const clear = () => {
    inputRef.current.value=''
  };

  return (
    <div className="row gap-1  align-center">
      <div className="col-9-xs">
        <Input
          ref={inputRef}
          className="w-full font-lg"
          placeholder="New todo..."
          validateInput={validateInput}
          id="todo-input"
        />
      </div>
      <div className="col-2-xs">
        <AddButton onClick={addTodo} />
      </div>
    </div>
  );
}

export default TodoInput;
