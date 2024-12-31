import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage)
import boardsReducer from './features/boards/boardsSlice';
import columnsReducer from './features/columns/columnsSlice';
import tasksReducer from './features/tasks/tasksSlice';

// Create a persist configuration object
const persistConfig = {
  key: 'root',
  storage, // You can change the storage to sessionStorage or others if needed
  whitelist: ['boards'], // Only persist the boards slice (add more slices if needed)
};

// Persist reducers
const persistedBoardsReducer = persistReducer(persistConfig, boardsReducer);

const store = configureStore({
  reducer: {
    boards: persistedBoardsReducer,
    columns: columnsReducer,
    tasks: tasksReducer,
  },
});

// Create the persistor
const persistor = persistStore(store);

// Use named exports for both store and persistor
export { store, persistor };
