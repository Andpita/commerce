import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './reducers/globalReducer';
import productsReducer from './reducers/productsReducer';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    globalReducer,
    productsReducer,
  },
});
