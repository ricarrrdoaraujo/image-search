import {
  Action,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';

import currentItemReducer from '../slices/currentItemSlice';

const rootReducer = combineReducers({
  currentItem: currentItemReducer,
})

const store = configureStore({
  reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;