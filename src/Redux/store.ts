import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './Reducers/userSlice';
import langReducer from './Reducers/langSlice';

const rootReducer = combineReducers({
  userReducer,
  langReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
