import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartType } from '../../../shared/types/CartType';

interface CartState {
  cart?: CartType;
}

const initialState: CartState = {
  cart: undefined,
};

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    setCartAction: (state, action: PayloadAction<CartType | undefined>) => {
      state.cart = action.payload;
    },
  },
});

export const { setCartAction } = cartSlice.actions;

export default cartSlice.reducer;
