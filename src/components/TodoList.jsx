import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {
  const { todoList } = useTodoContext();
  return (
    <ul>
      {todoList.map((item, id) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default TodoList;
