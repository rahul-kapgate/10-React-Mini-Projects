import { useContext, createContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg ",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo : (id) => {},
  ToggleComplete : (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider