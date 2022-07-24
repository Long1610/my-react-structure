import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "pages/Home/homeSlice";
import postsReducer from "pages/Posts/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
