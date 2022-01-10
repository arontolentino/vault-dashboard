import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from '../features/sample/sampleSlice';

export default configureStore({
  reducer: {
    sample: sampleReducer,
  },
});
