import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './reducers/cartReducer';
import categoryReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';
import orderReducer from './reducers/orderReducer';
import productsReducer from './reducers/productsReducer';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    globalReducer,
    categoryReducer,
    productsReducer,
    cartReducer,
    orderReducer,
  },
});
