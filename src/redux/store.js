import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { filterSlice } from './filter';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
