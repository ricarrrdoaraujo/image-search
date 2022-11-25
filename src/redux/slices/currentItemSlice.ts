import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

export interface currentItemState {
  currentItem: number;
}

const initialState: currentItemState = {
  currentItem: 0,
};

export const currentItemSlice = createSlice({
  name: 'currentItem',
  initialState,
  reducers: {
    setCurrentItem: (state, action: PayloadAction<number>) => {
      state.currentItem = action.payload;
    },
  },
});

export const {setCurrentItem} = currentItemSlice.actions;

export const selectCurrentItemSlice = (state: RootState) =>
  state.currentItem.currentItem;

export default currentItemSlice.reducer;
