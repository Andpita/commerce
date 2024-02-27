import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationType } from '../../../shared/types/NotificationType';
import { UserType } from '../../../shared/types/UserType';

interface GlobalReducer {
  user?: UserType;
  notification?: NotificationType;
}

const initialState: GlobalReducer = {
  user: undefined,
  notification: undefined,
};

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<UserType | undefined>) => {
      state.user = action.payload;
    },
    setNotificationAction: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload;
    },
  },
});

export const { setUserAction, setNotificationAction } = globalSlice.actions;

export default globalSlice.reducer;
