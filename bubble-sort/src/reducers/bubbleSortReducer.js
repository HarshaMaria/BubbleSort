import { createSlice } from '@reduxjs/toolkit';

export const bubbleSortSlice = createSlice({
  name: 'bubbleSort',
  initialState: {
    inputNumbers: '',
    numbers: [],
    sortedIndices: [],
    isSorting: false,
    comparingIndices: [],
    sortOrder: 'ascending',
  },
  reducers: {
    setInputNumbers: (state, action) => {
      state.inputNumbers = action.payload;
    },
    setNumbers: (state, action) => {
      state.numbers = action.payload;
    },
    setSortedIndices: (state, action) => {
      state.sortedIndices = action.payload;
    },
    setIsSorting: (state, action) => {
      state.isSorting = action.payload;
    },
    setComparingIndices: (state, action) => {
      state.comparingIndices = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    
  },
});

export const {
  setInputNumbers,
  setNumbers,
  setSortedIndices,
  setIsSorting,
  setComparingIndices,
  setSortOrder,

} = bubbleSortSlice.actions;

export default bubbleSortSlice.reducer;