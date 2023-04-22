import { configureStore } from "@reduxjs/toolkit";
import artworksSlice from "./artworksSlice";

export const store = configureStore({
  reducer: {
    artworks: artworksSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
