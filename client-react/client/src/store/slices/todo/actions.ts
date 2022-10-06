import { createAsyncThunk } from "@reduxjs/toolkit";
import TodoEntity from "../../../entities/todo.entity";
import TodoService from "../../../services/Todo.service";

const getTodos = createAsyncThunk("todo/getTodos", async () => {
  try {
    const resp = await TodoService.getTodos();
    return resp;
  } catch (error) {
    throw error;
  }
});

const addTodo = createAsyncThunk("todo/addTodo", async (todo: any) => {
  try {
    const resp = await TodoService.addTodo(new TodoEntity(todo));
    return resp;
  } catch (error) {
    throw error;
  }
});

const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id: string) => {
  try {
    const resp = await TodoService.deleteTodo(id);
    return resp;
  } catch (error) {
    throw error;
  }
});

const updateTodo = createAsyncThunk("todo/updateTodo", async (todo: any) => {
  try {
    const resp = await TodoService.updateTodo(todo);
    console.log(todo);
    return resp;
  } catch (error) {
    throw error;
  }
});

const actions = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};

export default actions;
