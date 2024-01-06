import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './features/carsSlice';

export const store = () => {
  return configureStore({
    reducer: {
      counter: carsReducer
    }
  })
}

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']