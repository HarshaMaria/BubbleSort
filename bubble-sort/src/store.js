import { configureStore } from '@reduxjs/toolkit';
import bubbleSortReducer from './reducers/bubbleSortReducer';

const store = configureStore({
  reducer: {
    bubbleSort: bubbleSortReducer,

  },
});

export default store;
