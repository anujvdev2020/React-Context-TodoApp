import { useContext, createContext, useState } from "react";

const TodoContext = createContext();

const initialTodoListState = ["Learn React"];
const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(initialTodoListState);
  const setTodos = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const contextValue = {
    todoList,
    setTodos
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;
