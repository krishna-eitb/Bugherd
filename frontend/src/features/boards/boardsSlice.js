import { createSlice } from '@reduxjs/toolkit';

const loadBoardsFromStorage = () => {
  try {
    const storedBoards = localStorage.getItem('boards');
    return storedBoards ? JSON.parse(storedBoards) : [];
  } catch (error) {
    console.error('Failed to load boards from localStorage:', error);
    return [];
  }
};

const saveBoardsToStorage = (boards) => {
  try {
    localStorage.setItem('boards', JSON.stringify(boards));
  } catch (error) {
    console.error('Failed to save boards to localStorage:', error);
  }
};

const initialState = {
  boards: loadBoardsFromStorage(),
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const newBoard = action.payload;
      state.boards.push(newBoard);
      saveBoardsToStorage(state.boards);
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter((board) => board.id !== action.payload);
      saveBoardsToStorage(state.boards);
    },
    updateBoard: (state, action) => {
      const updatedBoard = action.payload;
      const boardIndex = state.boards.findIndex((board) => board.id === updatedBoard.id);
      if (boardIndex !== -1) {
        state.boards[boardIndex] = updatedBoard;
        saveBoardsToStorage(state.boards);
      }
    },
  },
});

export const { addBoard, deleteBoard, updateBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
