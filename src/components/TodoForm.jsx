import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";
const TodoForm = () => {
  const { setTodos } = useTodoContext();
  const [item, setItem] = useState("");
  const handleAddTodo = (e) => {
    setItem(e.target.value);
    setTodos(item);
  };
  return (
    <div>
      <input type="text" value={item} onChange={handleAddTodo} />
    </div>
  );
};

export default TodoForm;
