import { configureStore } from '@reduxjs/toolkit';
import filter from './filter';
import contacts from './contacts';

export const store = configureStore({
  reducer: {
    filter,
    contacts,
  },
});
