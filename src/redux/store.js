import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import filter from './filter';
import contacts from './contacts';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contacts
);
const filterPersistConfig = {
  key: 'filter',
  version: 1,
  storage,
};
const persistedFilterReducer = persistReducer(filterPersistConfig, filter);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
