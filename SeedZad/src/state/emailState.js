import { createSlice } from '@reduxjs/toolkit';

export const emailState = createSlice({
  name: 'email',
  initialState: {
    email: 0
  },
  reducers: {
   
    setEmail: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEmail } = emailState.actions;


export const selectEmail = state => state.email.value;

export default emailState.reducer;
