import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 1,
        todo: "Membersihkan Rumah",
        completed: true,
      },
      {
        id: 2,
        todo: "Membuang Sampah",
        completed: false,
      },
      {
        id: 3,
        todo: "Menyiram Bunga",
        completed: false,
      },
      {
        id: 4,
        todo: "Mengantarkan Sampah ke Bank Sampah",
        completed: false,
      },
      {
        id: 5,
        todo: "Membuat Prakarya dari Sampah-sampah",
        completed: true,
      },
    ],
    filterBy: "ALL",
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        todo: action.payload.todo,
        completed: false,
      };
      state.todos = [...state.todos, newTodo];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    completeTodo: (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id == action.payload.id ? { ...el, completed: !el.completed } : el
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id == action.payload.id ? { ...el, todo: action.payload.todo } : el
      );
    },
    updateFilter: (state, action) => {
      state.filterBy = action.payload.filterBy;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, updateTodo, updateFilter } =
  todosSlice.actions;

export default todosSlice.reducer;
