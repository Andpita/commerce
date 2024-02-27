import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryType } from '../../../shared/types/CategoryType';

interface CategoryState {
  categories: CategoryType[];
  category?: CategoryType;
}

const initialState: CategoryState = {
  categories: [],
  category: undefined,
};

export const categorySlice = createSlice({
  name: 'categoryReducer',
  initialState,
  reducers: {
    setCategoriesAction: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
    setCategoryAction: (state, action: PayloadAction<CategoryType | undefined>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategoriesAction, setCategoryAction } = categorySlice.actions;

export default categorySlice.reducer;
