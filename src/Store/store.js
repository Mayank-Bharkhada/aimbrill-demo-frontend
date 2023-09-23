// Import necessary dependencies
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Create the store
const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can provide middleware or other configurations here
});

export default store;
