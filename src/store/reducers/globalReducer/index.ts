import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../../shared/types/UserType';

interface GlobalReducer {
  user?: UserType;
}

const initialState: GlobalReducer = {
  user: undefined,
};

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserAction } = globalSlice.actions;

export default globalSlice.reducer;
