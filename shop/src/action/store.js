import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items.js';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
