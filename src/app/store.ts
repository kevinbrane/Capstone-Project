import { configureStore } from "@reduxjs/toolkit"
import educationReducer from "../features/education/educationSlice"
export const store = configureStore({
  reducer: { education: educationReducer },
})
export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch