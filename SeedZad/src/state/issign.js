import { createSlice } from '@reduxjs/toolkit';

export const signState = createSlice({
  name: 'isSignedIn',
  initialState: {
    isSignedIn: 0
  },
  reducers: {
   
    setisSignedIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setisSignedIn } = signState.actions;


export const selectisSignedIn = state => state.isSignedIn.value;

export default signState.reducer;
