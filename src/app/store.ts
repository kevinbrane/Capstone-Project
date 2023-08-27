import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../features/education/educationSlice";
import skillsReducer from "../features/skills/skillsSlice";

export const store = configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;