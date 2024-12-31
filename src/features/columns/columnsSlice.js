import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  columns: [], // Will store columns related to a specific board
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns.push(action.payload);
    },
    deleteColumn: (state, action) => {
      state.columns = state.columns.filter(column => column.id !== action.payload);
    },
    renameColumn: (state, action) => {
      const column = state.columns.find(column => column.id === action.payload.id);
      if (column) {
        column.name = action.payload.name;
      }
    },
  },
});

export const { addColumn, deleteColumn, renameColumn } = columnsSlice.actions;
export default columnsSlice.reducer;
