import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { TodoState } from "../../types/todo";
import actions from "./todo/actions";

const initialState: TodoState = {
  todos: [],
  status: "idle",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.getTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.getTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(actions.getTodos.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(actions.addTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.addTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos.push(action.payload);
      })
      .addCase(actions.addTodo.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(actions.deleteTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(actions.deleteTodo.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = state.todos.filter(
          (todo: any) => todo.id != action.payload
        );
      })
      .addCase(actions.deleteTodo.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCount = (state: RootState) => state.todos;

export default todoSlice.reducer;
