import { createSlice } from '@reduxjs/toolkit';

export interface TagsState {
  tags: string[];
}

const initialState: TagsState = {
  tags: ['test tag 1'],
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
});

export const tagsActions = tagsSlice.actions;
const tagsReducer = tagsSlice.reducer;
export default tagsReducer;
