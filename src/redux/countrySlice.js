import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCountries } = countrySlice.actions;
export default countrySlice.reducer;
