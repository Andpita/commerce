import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddressType } from '../../../shared/types/AddressType';

interface AddressProps {
  address?: AddressType[];
}

const initialState: AddressProps = {
  address: [],
};

export const addressSlice = createSlice({
  name: 'addressReducer',
  initialState,
  reducers: {
    setAddressAction: (state, action: PayloadAction<AddressType[]>) => {
      state.address = action.payload;
    },
  },
});

export const { setAddressAction } = addressSlice.actions;

export default addressSlice.reducer;
