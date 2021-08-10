import { configureStore } from '@reduxjs/toolkit';

import listReducer from './slices/listSlice';
import detailReducer from './slices/detailSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer
  },
});
