import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slice/ui-slice';
import { tagsApi } from './service/tags-api';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tagsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
