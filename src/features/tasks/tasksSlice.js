import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], // Will store tasks related to specific columns
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.name = action.payload.name;
        task.description = action.payload.description;
        task.priority = action.payload.priority;
        task.dueDate = action.payload.dueDate;
      }
    },
    moveTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.columnId = action.payload.newColumnId;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask, moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;
