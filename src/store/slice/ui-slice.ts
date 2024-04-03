import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface UIState {
  rowsPerPage: number;
}

const initialState: UIState = {
  rowsPerPage: 10,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeRowsPerPage(state, action) {
      state.rowsPerPage = action.payload;
    },
  },
});

export const uiSelector = (state: RootState) => state.ui;

export const uiActions = uiSlice.actions;
const uiReducer = uiSlice.reducer;
export default uiReducer;
