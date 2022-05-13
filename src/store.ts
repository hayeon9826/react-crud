import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import posts from './slices/post';
import form from './slices/form';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    posts,
    form
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
