
const baseURL = process.env.REACT_APP_API_URL || "http://127.0.0.1";
const PORT= process.env.REACT_APP_API_PORT || "8081";

const url=`${baseURL}:${PORT}`

export const urls = {
  addTodo: `${url}/todos`,

  getTodos: `${url}/todos`,

  deleteTodo: (id: string) => `${url}/todos/${id}`,

  updateTodo: (id: string) => `${url}/todos/${id}`,
};
