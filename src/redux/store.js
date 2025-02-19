import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './countriesSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    countries: countriesSlice,
    auth: authSlice
  },
});

export default store;
