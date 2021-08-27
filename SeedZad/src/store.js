import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './state/emailState';
import signReducer from './state/issign'



export default configureStore({
  reducer: {
    email: emailReducer,
    isSignedIn:signReducer
    
  },
});

