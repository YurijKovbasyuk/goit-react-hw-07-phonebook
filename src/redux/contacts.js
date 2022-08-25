import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
});

export default contactSlice.reducer;
