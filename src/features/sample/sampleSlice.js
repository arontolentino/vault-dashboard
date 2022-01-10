import { createSlice } from '@reduxjs/toolkit';

export const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    company: 'Vault',
    items: [],
  },
  reducers: {
    setCompany: (state, action) => {
      state.value = action.payload;
    },
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    updateItem: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteItem: (state, action) => {
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload),
      ];
    },
  },
});

export const selectCompany = (state) => state.sample.company;

export const selectItems = (state) => state.sample.items;

export default sampleSlice.reducer;
